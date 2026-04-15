import {
  FlatList,
  Dimensions,
  Image,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  Pressable,
  TextInput,
} from "react-native";
import { useState } from "react";
import { styles } from "./style";
import imageBackground from "../assets/background-img.png";
import logo from "../assets/logo.png";
import { useFonts } from "expo-font";
import dot from "../assets/dot.png";
import { LinearGradient } from "expo-linear-gradient";
import Arrow from "../assets/arrow-right-white.png";
import Close from "../assets/close-white.png";
import Line from "../assets/line.png";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../services/api";

const [email, setEmail] = useState("");
const [senha, setSenha] = useState("");
const [nome, setNome] = useState(""); // Para o cadastro
const [confirmarSenha, setConfirmarSenha] = useState(""); // Para o cadastro

// Função de login
async function realizarLogin() {
  if (!email || !senha) {
    alert("Por favor, preencha todos os campos");
    return;
  }

  try {
    const resp = await api.post("/api/login", {
      email: email,
      senha: senha,
    });

    // Se deu certo salvamos o token no celular
    await AsyncStorage.setItem("@token_app", resp.data.access_token);

    // E navegamos para a loja
    navigation.replace("StoreScreen");
  } catch (err) {
    alert("Email ou senha incorretos");
  }
}

// função de Cadastro
async function realizarCadastro() {
  if (senha != confirmarSenha) {
    alert("As senhas não coincidem");
    return;
  }

  try {
    await api.post('/api/register', {
      nome: nome,
      email: email,
      senha: senha
    });

    alert("Conta criada com sucesso! Agora faça seu login.");
    toggleCadastro(); // Fecha o modal de cadastro
    setLoginAtivo(true); // Abre o de login
  } catch (err) {
    alert("Erro ao cadastrar. Verifique os dados ou se o e-mail já existe.");
  }
}

// UseEffect para o usuário não precisar mais logar desde que entra pela primeira vez
useEffect(() => {
  async function checarToken() {
    const token = await AsyncStorage.getItem('@token_app');
    if (token) {
      navigation.replace('StoreScreen');
    }
  }
  checarToken();
}, []);

// Construindo uma lista que as informacoes de cada card
const DATA = [
  {
    id: "1",
    title: "",
    subtitle:
      "Faça login ou crie uma conta MyBB para acessar um conteúdo exclusivo.",
  },
  {
    id: "2",
    title: "Curadoria de Conteúdo",
    subtitle:
      "Desfrute de conteúdos inspiradores sobre novas coleções e desfiles de moda.",
  },
  {
    id: "3",
    title: "Uma Wishlist Personalizada",
    subtitle: "Reúna todas as suas peças favoritas e gerencie a sua wishlist.",
  },
  {
    id: "4",
    title: "Serviços Exclusivos",
    subtitle: "Acesse suas solicitações de reparo e atendimento em loja.",
  },
  {
    id: "5",
    title: "Minha Conta MyBB",
    subtitle:
      "Acompanhe seus pesidos e devoluções, e gerencie suas informações pessoais.",
  },
];

// Pegar largura da tela
const { width } = Dimensions.get("window");

// Function para acender a bolinha

export default function WelcomeScreen({ navigation }) {
  const [loginAtivo, setLoginAtivo] = useState(false);
  const [cadastroAtivo, setCadastroAtivo] = useState(false);

  const toggleLogin = () => {
    setLoginAtivo(!loginAtivo);
  };

  const toggleCadastro = () => {
    setCadastroAtivo(!cadastroAtivo);
  };

  // -- Adicionar fonte --
  const [fontsLoaded] = useFonts({
    "Jost-Regular": require("../assets/fonts/Jost/Jost-Regular.ttf"),
    "Jost-SemiBold": require("../assets/fonts/Jost/Jost-SemiBold.ttf"),
    "Jost-Medium": require("../assets/fonts/Jost/Jost-Medium.ttf"),
    "Jost-Light": require("../assets/fonts/Jost/Jost-Light.ttf"),
    "Jost-ExtraLight": require("../assets/fonts/Jost/Jost-ExtraLight.ttf"),
    "Jost-Bold": require("../assets/fonts/Jost/Jost-Bold.ttf"),
  });
  // Caso nao carregar
  if (!fontsLoaded)
    return <View style={{ flex: 1, backgroundColor: "white" }} />;

  // ----------------------

  // Renderizar cada card
  const renderItem = ({ item }) => (
    // Introducao texto
    // width Define a largura desta view
    <View style={[styles.introText, { width }]}>
      {/* Titulo */}
      <Text style={styles.title}>{item.title}</Text>
      {/* Subtitulo */}
      <Text style={styles.subtitle}>{item.subtitle}</Text>
    </View>
  );

  return (
    // Imagem de fundo
    <ImageBackground source={imageBackground} style={styles.imageBackground}>
      {/* Sombra */}
      <View style={styles.sombra}></View>

      {/* Logo */}
      <Image source={logo} style={styles.logo}></Image>

      {/* Carrossel */}
      <View style={styles.carrosel}>
        <FlatList
          data={DATA} // Dados
          renderItem={renderItem} // Renderizar
          keyExtractor={(item) => item.id} // Usar o id para saber qual item
          horizontal // Deixar horizontal
          pagingEnabled // Vai de item em item
          showsHorizontalScrollIndicator={false} // Esconder scroll
        />
      </View>

      {/* Dot */}
      <View style={styles.containerDot}>
        <Image style={styles.dot} source={dot}></Image>
        <Image style={styles.dot} source={dot}></Image>
        <Image style={styles.dot} source={dot}></Image>
        <Image style={styles.dot} source={dot}></Image>
        <Image style={styles.dot} source={dot}></Image>
      </View>

      {/* Login */}
      {/* activeOpacity aumentar a opcidade quando apertado */}
      <TouchableOpacity
        style={styles.login}
        activeOpacity={0.7}
        onPress={toggleLogin}
      >
        <Text style={styles.textLogin}>Login</Text>
      </TouchableOpacity>

      {/* Cadastro */}
      <TouchableOpacity
        style={styles.cadastro}
        activeOpacity={0.7}
        onPress={toggleCadastro}
      >
        <Text style={styles.textCadastro}>Cadastre-se</Text>
      </TouchableOpacity>

      {/* Visitante */}
      <Pressable
        style={styles.visitante}
        onPress={() => navigation.navigate("StoreScreen")}
      >
        <Text style={styles.visitanteText}>Continuar como Visitante</Text>
      </Pressable>

      {/* Area Login */}
      <LinearGradient
        style={[styles.areaLogin, loginAtivo && styles.areaLoginActive]}
        colors={["#111010", "#272725", "#737373"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
      >
        <View style={styles.containerLogin}>
          <View style={styles.containerVoltar}>
            <TouchableOpacity
              style={styles.voltar}
              activeOpacity={1}
              onPress={toggleLogin}
            >
              <Image source={Arrow} style={styles.arrowImg} />
            </TouchableOpacity>
          </View>

          <View style={styles.title}>
            <Text style={styles.textTitle}>Iniciar Sessão na Sua Conta</Text>
          </View>
          <View style={styles.subTitle}>
            <Text style={styles.textSubTitle}>
              Digite seu endereço de e-mail e senha para fazer login.
            </Text>
          </View>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.containerTextInput}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              placeholderTextColor="#ffffff4f"
            />
          </View>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.containerTextInput}
              placeholder="Senha"
              secureTextEntry
              value={senha}
              onChangeText={setSenha}
              placeholderTextColor="#ffffff4f"
            />
          </View>
          <View style={styles.passwordLogin}>
            <Pressable style={styles.passwordPress}>
              <Text style={styles.passwordText}>Esqueci minha senha</Text>
            </Pressable>
          </View>
          <TouchableOpacity style={styles.touchableLogin} onPress={realizarLogin} activeOpacity={0.7}>
            <Text style={styles.touchableLoginText}>Login</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>

      {/* Area Cadastro */}
      <LinearGradient
        style={[
          styles.areaCadastro,
          cadastroAtivo && styles.areaCadastroActive,
        ]}
        colors={["#111010", "#272725", "#737373"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
      >
        <View style={styles.containerHeader}>
          <View style={styles.containerStep}>
            <View style={styles.step}>
              <Text style={styles.textStep}>1 / 1</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.close}
            activeOpacity={1}
            onPress={toggleCadastro}
          >
            <Image source={Close} style={styles.closeImg} />
          </TouchableOpacity>
        </View>
        <View style={styles.containerLine}>
          <Image source={Line} style={styles.lineImg} />
        </View>
        <View style={styles.title}>
          <Text style={styles.textTitle}>Crie Sua Conta</Text>
        </View>
        <View style={styles.subTitle}>
          <Text style={styles.textSubTitle}>
            Você receberá um código por e-mail para validar a criação da
          </Text>
          <Text style={styles.textSubTitle}>sua conta.</Text>
        </View>
        <View style={styles.infoCadastro}>
          <Text style={styles.infoCadastroText}>
            Todos os campos são obrigatórios.
          </Text>
        </View>

        <View style={styles.containerInput}>
          <TextInput
            style={styles.containerTextInput}
            placeholder="Nome *"
            value={nome}
            onChangeText={setNome}
            placeholderTextColor="#ffffff4f"
          />
        </View>
        <View style={styles.containerInput}>
          <TextInput
            style={styles.containerTextInput}
            placeholder="Email *"
            value={email}
            onChangeText={setEmail}
            placeholderTextColor="#ffffff4f"
          />
        </View>
        <View style={styles.containerInput}>
          <TextInput
            style={styles.containerTextInput}
            placeholder="Senha *"
            value={senha}
            onChangeText={setSenha}
            placeholderTextColor="#ffffff4f"
          />
        </View>
        <View style={styles.containerInput}>
          <TextInput
            style={styles.containerTextInput}
            placeholder="Confirmar senha *"
            value={confirmarSenha}
            onChangeText={setConfirmarSenha}
            placeholderTextColor="#ffffff4f"
          />
        </View>
        <TouchableOpacity style={styles.touchableLogin} onPress={realizarCadastro} activeOpacity={0.7}>
          <Text style={styles.touchableLoginText}>Confirmar</Text>
        </TouchableOpacity>
      </LinearGradient>
    </ImageBackground>
  );
}
