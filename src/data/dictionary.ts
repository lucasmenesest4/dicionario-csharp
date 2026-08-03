export interface DictEntry {
  term: string;
  code: string;
}

export interface DictCategory {
  id: string;
  title: string;
  letter: string;
  entries: DictEntry[];
}

export const dictionary: DictCategory[] = [
  {
    id: "estrutura-obrigatoria",
    title: "Estrutura Obrigatória",
    letter: "E",
    entries: [
      { term: "importar unity", code: "using UnityEngine;" },
      { term: "criar classe", code: "public class Nome : MonoBehaviour" },
      { term: "abrir classe", code: "{" },
      { term: "fechar classe", code: "}" },
      { term: "fim de linha", code: ";" },
      {
        term: "estrutura base",
        code: `using UnityEngine;

public class Nome : MonoBehaviour
{
    void Start()
    {
    }

    void Update()
    {
    }
}`,
      },
    ],
  },
  {
    id: "funcoes-principais",
    title: "Funções Principais",
    letter: "F",
    entries: [
      { term: "rodar 1 vez no início", code: "void Start() { }" },
      { term: "rodar todo frame", code: "void Update() { }" },
      { term: "criar função própria", code: "void NomeDaFuncao() { }" },
      { term: "usar função própria", code: "NomeDaFuncao();" },
    ],
  },
  {
    id: "variaveis",
    title: "Variáveis",
    letter: "V",
    entries: [
      { term: "número inteiro", code: "int nome = 0;" },
      { term: "número decimal", code: "float nome = 0f;" },
      { term: "texto", code: 'string nome = "texto";' },
      { term: "verdadeiro ou falso", code: "bool nome = true;" },
      {
        term: "exemplos de variáveis",
        code: `int balas = 5;
float velocidade = 2f;
string nomeArma = "Rifle";
bool travaAtivada = false;`,
      },
    ],
  },
  {
    id: "mudar-valor-variavel",
    title: "Mudar Valor de Variável",
    letter: "M",
    entries: [
      { term: "colocar valor exato", code: "variavel = 10;" },
      { term: "somar 1", code: "variavel++;" },
      { term: "subtrair 1", code: "variavel--;" },
      { term: "somar valor", code: "variavel += 5;" },
      { term: "subtrair valor", code: "variavel -= 5;" },
      { term: "multiplicar", code: "variavel *= 2;" },
      { term: "dividir", code: "variavel /= 2;" },
      { term: "forma longa diminuir 1", code: "variavel = variavel - 1;" },
      { term: "forma longa aumentar 1", code: "variavel = variavel + 1;" },
    ],
  },
  {
    id: "comparar-valores",
    title: "Comparar Valores",
    letter: "C",
    entries: [
      { term: "igual a", code: "==" },
      { term: "diferente de", code: "!=" },
      { term: "maior que", code: ">" },
      { term: "menor que", code: "<" },
      { term: "maior ou igual", code: ">=" },
      { term: "menor ou igual", code: "<=" },
      {
        term: "exemplos de comparação",
        code: `balas == 0
balas > 0
balas < 5
travaAtivada == true`,
      },
    ],
  },
  {
    id: "logica",
    title: "Lógica",
    letter: "L",
    entries: [
      { term: "e", code: "&&" },
      { term: "ou", code: "||" },
      { term: "não", code: "!" },
      {
        term: "apertou T e tem bala",
        code: "Input.GetKeyDown(KeyCode.T) && balas > 0",
      },
      {
        term: "apertou T ou R",
        code: "Input.GetKeyDown(KeyCode.T) || Input.GetKeyDown(KeyCode.R)",
      },
      { term: "não está travada", code: "!travaAtivada" },
      {
        term: "regra da lógica",
        code: `&& junta condições
|| aceita uma ou outra
! inverte bool`,
      },
    ],
  },
  {
    id: "if-else",
    title: "If / Else / Else If",
    letter: "I",
    entries: [
      { term: "se", code: "if (condicao) { }" },
      { term: "senão", code: "else { }" },
      { term: "senão se", code: "else if (condicao) { }" },
      {
        term: "estrutura if/else",
        code: `if (condicao)
{
    acao;
}
else
{
    outraAcao;
}`,
      },
      {
        term: "exemplo if/else",
        code: `if (balas > 0)
{
    balas--;
}
else
{
    Debug.Log("Sem municao");
}`,
      },
    ],
  },
  {
    id: "if-dentro-de-if",
    title: "If Dentro de If",
    letter: "I",
    entries: [
      {
        term: "estrutura if aninhado",
        code: `if (condicao1)
{
    if (condicao2)
    {
        acao;
    }
}`,
      },
      {
        term: "exemplo if aninhado",
        code: `if (Input.GetKeyDown(KeyCode.T))
{
    if (balas > 0)
    {
        balas--;
    }
}`,
      },
    ],
  },
  {
    id: "inverter-bool",
    title: "Inverter Bool",
    letter: "I",
    entries: [
      { term: "true vira false", code: "variavel = false;" },
      { term: "false vira true", code: "variavel = true;" },
      { term: "inverter automático", code: "variavel = !variavel;" },
      { term: "exemplo inverter bool", code: "travaAtivada = !travaAtivada;" },
    ],
  },
  {
    id: "input",
    title: "Input",
    letter: "I",
    entries: [
      { term: "apertou agora", code: "Input.GetKeyDown(KeyCode.X)" },
      { term: "segurando", code: "Input.GetKey(KeyCode.X)" },
      { term: "soltou agora", code: "Input.GetKeyUp(KeyCode.X)" },
      {
        term: "exemplos de input",
        code: `Input.GetKeyDown(KeyCode.T)
Input.GetKey(KeyCode.Space)
Input.GetKeyUp(KeyCode.R)`,
      },
    ],
  },
  {
    id: "teclas",
    title: "Teclas",
    letter: "T",
    entries: [
      { term: "espaço", code: "KeyCode.Space" },
      { term: "enter", code: "KeyCode.Return" },
      { term: "tab", code: "KeyCode.Tab" },
      { term: "escape", code: "KeyCode.Escape" },
      { term: "backspace", code: "KeyCode.Backspace" },
      { term: "tecla A", code: "KeyCode.A" },
      { term: "tecla B", code: "KeyCode.B" },
      { term: "tecla C", code: "KeyCode.C" },
      { term: "tecla D", code: "KeyCode.D" },
      { term: "tecla E", code: "KeyCode.E" },
      { term: "tecla F", code: "KeyCode.F" },
      { term: "tecla G", code: "KeyCode.G" },
      { term: "tecla H", code: "KeyCode.H" },
      { term: "tecla I", code: "KeyCode.I" },
      { term: "tecla J", code: "KeyCode.J" },
      { term: "tecla K", code: "KeyCode.K" },
      { term: "tecla L", code: "KeyCode.L" },
      { term: "tecla M", code: "KeyCode.M" },
      { term: "tecla N", code: "KeyCode.N" },
      { term: "tecla O", code: "KeyCode.O" },
      { term: "tecla P", code: "KeyCode.P" },
      { term: "tecla Q", code: "KeyCode.Q" },
      { term: "tecla R", code: "KeyCode.R" },
      { term: "tecla S", code: "KeyCode.S" },
      { term: "tecla T", code: "KeyCode.T" },
      { term: "tecla U", code: "KeyCode.U" },
      { term: "tecla V", code: "KeyCode.V" },
      { term: "tecla W", code: "KeyCode.W" },
      { term: "tecla X", code: "KeyCode.X" },
      { term: "tecla Y", code: "KeyCode.Y" },
      { term: "tecla Z", code: "KeyCode.Z" },
      { term: "número 0", code: "KeyCode.Alpha0" },
      { term: "número 1", code: "KeyCode.Alpha1" },
      { term: "número 2", code: "KeyCode.Alpha2" },
      { term: "número 3", code: "KeyCode.Alpha3" },
      { term: "número 4", code: "KeyCode.Alpha4" },
      { term: "número 5", code: "KeyCode.Alpha5" },
      { term: "número 6", code: "KeyCode.Alpha6" },
      { term: "número 7", code: "KeyCode.Alpha7" },
      { term: "número 8", code: "KeyCode.Alpha8" },
      { term: "número 9", code: "KeyCode.Alpha9" },
      { term: "mouse esquerdo", code: "KeyCode.Mouse0" },
      { term: "mouse direito", code: "KeyCode.Mouse1" },
      { term: "mouse do meio", code: "KeyCode.Mouse2" },
    ],
  },
  {
    id: "mostrar-console",
    title: "Mostrar no Console",
    letter: "M",
    entries: [
      { term: "mostrar texto", code: 'Debug.Log("texto");' },
      { term: "mostrar valor", code: "Debug.Log(valor);" },
      { term: "mostrar texto + valor", code: 'Debug.Log("texto" + valor);' },
      {
        term: "exemplos de console",
        code: `Debug.Log("Atirei");
Debug.Log(balas);
Debug.Log("Balas: " + balas);`,
      },
    ],
  },
  {
    id: "comentarios",
    title: "Comentários",
    letter: "C",
    entries: [
      { term: "comentário de uma linha", code: "// comentario" },
      { term: "comentário de várias linhas", code: "/* comentario */" },
      {
        term: "exemplos de comentário",
        code: `// isso eh ignorado

/* isso tambem
eh ignorado */`,
      },
    ],
  },
  {
    id: "loops",
    title: "Loops",
    letter: "L",
    entries: [
      { term: "enquanto", code: "while (condicao) { }" },
      { term: "para", code: "for (int i = 0; i < 10; i++) { }" },
      { term: "para cada", code: "foreach (var item in lista) { }" },
      {
        term: "exemplo while",
        code: `while (balas > 0)
{
    balas--;
}`,
      },
      {
        term: "exemplo for",
        code: `for (int i = 0; i < 5; i++)
{
    Debug.Log(i);
}`,
      },
    ],
  },
  {
    id: "arrays",
    title: "Arrays",
    letter: "A",
    entries: [
      { term: "criar array vazio", code: "int[] nome = new int[10];" },
      { term: "criar array com valores", code: "int[] nome = {1, 2, 3};" },
      { term: "pegar item do array", code: "nome[0];" },
      { term: "mudar item do array", code: "nome[0] = 99;" },
      { term: "tamanho do array", code: "nome.Length;" },
    ],
  },
  {
    id: "listas",
    title: "Listas",
    letter: "L",
    entries: [
      { term: "importar listas", code: "using System.Collections.Generic;" },
      { term: "criar lista", code: "List<int> nome = new List<int>();" },
      { term: "adicionar item na lista", code: "nome.Add(valor);" },
      { term: "remover item da lista", code: "nome.Remove(valor);" },
      { term: "pegar item da lista", code: "nome[0];" },
      { term: "tamanho da lista", code: "nome.Count;" },
      {
        term: "exemplo de lista",
        code: `List<string> armas = new List<string>();
armas.Add("Pistola");`,
      },
    ],
  },
  {
    id: "matematica",
    title: "Matemática",
    letter: "M",
    entries: [
      { term: "somar", code: "a + b" },
      { term: "subtrair", code: "a - b" },
      { term: "multiplicar (matemática)", code: "a * b" },
      { term: "dividir (matemática)", code: "a / b" },
      { term: "resto da divisão", code: "a % b" },
      { term: "valor absoluto", code: "Mathf.Abs(valor)" },
      { term: "arredondar", code: "Mathf.Round(valor)" },
      { term: "arredondar pra baixo", code: "Mathf.Floor(valor)" },
      { term: "arredondar pra cima", code: "Mathf.Ceil(valor)" },
      { term: "menor de dois", code: "Mathf.Min(a, b)" },
      { term: "maior de dois", code: "Mathf.Max(a, b)" },
      { term: "limitar valor", code: "Mathf.Clamp(valor, min, max)" },
      { term: "aleatório int", code: "Random.Range(0, 10)" },
      { term: "aleatório float", code: "Random.Range(0f, 1f)" },
    ],
  },
  {
    id: "tempo",
    title: "Tempo",
    letter: "T",
    entries: [
      { term: "tempo desde o início", code: "Time.time" },
      { term: "tempo do frame", code: "Time.deltaTime" },
      { term: "escala de tempo", code: "Time.timeScale" },
      {
        term: "exemplo de tempo",
        code: "transform.Translate(0, 0, velocidade * Time.deltaTime);",
      },
    ],
  },
  {
    id: "transform",
    title: "Transform",
    letter: "T",
    entries: [
      { term: "posição", code: "transform.position" },
      { term: "rotação", code: "transform.rotation" },
      { term: "escala", code: "transform.localScale" },
      { term: "mover", code: "transform.Translate(x, y, z)" },
      { term: "rotacionar", code: "transform.Rotate(x, y, z)" },
      { term: "olhar para", code: "transform.LookAt(alvo)" },
      { term: "posição x", code: "transform.position.x" },
      { term: "posição y", code: "transform.position.y" },
      { term: "posição z", code: "transform.position.z" },
    ],
  },
  {
    id: "gameobject",
    title: "GameObject",
    letter: "G",
    entries: [
      { term: "este objeto", code: "gameObject" },
      { term: "nome do objeto", code: "gameObject.name" },
      { term: "ativar objeto", code: "gameObject.SetActive(true)" },
      { term: "desativar objeto", code: "gameObject.SetActive(false)" },
      { term: "destruir objeto", code: "Destroy(gameObject)" },
      { term: "destruir com tempo", code: "Destroy(gameObject, 2f)" },
      { term: "criar objeto", code: "Instantiate(prefab)" },
      { term: "criar em posição", code: "Instantiate(prefab, posicao, rotacao)" },
      { term: "achar por nome", code: 'GameObject.Find("Nome")' },
      { term: "achar por tag", code: 'GameObject.FindWithTag("Tag")' },
      {
        term: "achar todos por tag",
        code: 'GameObject.FindGameObjectsWithTag("Tag")',
      },
      { term: "comparar tag", code: 'gameObject.CompareTag("Inimigo")' },
    ],
  },
  {
    id: "componentes",
    title: "Componentes",
    letter: "C",
    entries: [
      { term: "pegar componente", code: "GetComponent<Tipo>()" },
      { term: "pegar no filho", code: "GetComponentInChildren<Tipo>()" },
      { term: "pegar no pai", code: "GetComponentInParent<Tipo>()" },
      { term: "adicionar componente", code: "gameObject.AddComponent<Tipo>()" },
      {
        term: "exemplos de componente",
        code: `GetComponent<Rigidbody>()
GetComponent<AudioSource>()
GetComponent<Animator>()`,
      },
    ],
  },
  {
    id: "rigidbody",
    title: "Rigidbody",
    letter: "R",
    entries: [
      { term: "pegar rigidbody", code: "GetComponent<Rigidbody>()" },
      { term: "adicionar força", code: "rb.AddForce(direcao)" },
      { term: "adicionar impulso", code: "rb.AddForce(direcao, ForceMode.Impulse)" },
      { term: "velocidade", code: "rb.velocity" },
      { term: "zerar velocidade", code: "rb.velocity = Vector3.zero" },
      { term: "massa", code: "rb.mass" },
      { term: "usar gravidade", code: "rb.useGravity = true" },
    ],
  },
  {
    id: "colisoes",
    title: "Colisões",
    letter: "C",
    entries: [
      { term: "quando colidir", code: "void OnCollisionEnter(Collision col) { }" },
      { term: "enquanto colide", code: "void OnCollisionStay(Collision col) { }" },
      {
        term: "quando sair da colisão",
        code: "void OnCollisionExit(Collision col) { }",
      },
      { term: "quando entrar no trigger", code: "void OnTriggerEnter(Collider col) { }" },
      { term: "enquanto no trigger", code: "void OnTriggerStay(Collider col) { }" },
      { term: "quando sair do trigger", code: "void OnTriggerExit(Collider col) { }" },
      { term: "nome do objeto colidido", code: "col.gameObject.name" },
      { term: "tag do objeto colidido", code: "col.gameObject.tag" },
    ],
  },
  {
    id: "raycast",
    title: "Raycast",
    letter: "R",
    entries: [
      {
        term: "atirar ray",
        code: "Physics.Raycast(origem, direcao, out hit, distancia)",
      },
      { term: "pegar objeto acertado", code: "hit.collider.gameObject" },
      { term: "pegar ponto de impacto", code: "hit.point" },
      { term: "pegar normal do impacto", code: "hit.normal" },
      {
        term: "exemplo de raycast",
        code: `RaycastHit hit;
if (Physics.Raycast(transform.position, transform.forward, out hit, 100f))
{
    Debug.Log(hit.collider.name);
}`,
      },
    ],
  },
  {
    id: "audio",
    title: "Audio",
    letter: "A",
    entries: [
      { term: "pegar audio source", code: "GetComponent<AudioSource>()" },
      { term: "tocar som", code: "audioSource.Play()" },
      { term: "parar som", code: "audioSource.Stop()" },
      { term: "pausar som", code: "audioSource.Pause()" },
      { term: "tocar clip", code: "audioSource.PlayOneShot(clip)" },
      { term: "volume", code: "audioSource.volume" },
    ],
  },
  {
    id: "animator",
    title: "Animator",
    letter: "A",
    entries: [
      { term: "pegar animator", code: "GetComponent<Animator>()" },
      { term: "mudar bool (animator)", code: 'animator.SetBool("nome", true)' },
      { term: "mudar int (animator)", code: 'animator.SetInteger("nome", 1)' },
      { term: "mudar float (animator)", code: 'animator.SetFloat("nome", 0.5f)' },
      { term: "ativar trigger", code: 'animator.SetTrigger("nome")' },
    ],
  },
  {
    id: "coroutines",
    title: "Coroutines",
    letter: "C",
    entries: [
      { term: "importar coroutines", code: "using System.Collections;" },
      { term: "criar coroutine", code: "IEnumerator Nome() { }" },
      { term: "esperar segundos", code: "yield return new WaitForSeconds(2f);" },
      { term: "esperar 1 frame", code: "yield return null;" },
      { term: "iniciar coroutine", code: "StartCoroutine(Nome());" },
      { term: "parar coroutine", code: "StopCoroutine(Nome());" },
    ],
  },
  {
    id: "cenas",
    title: "Cenas",
    letter: "C",
    entries: [
      { term: "importar cenas", code: "using UnityEngine.SceneManagement;" },
      { term: "carregar por nome", code: 'SceneManager.LoadScene("Nome");' },
      { term: "carregar por índice", code: "SceneManager.LoadScene(0);" },
      {
        term: "recarregar cena atual",
        code: "SceneManager.LoadScene(SceneManager.GetActiveScene().name);",
      },
    ],
  },
  {
    id: "playerprefs",
    title: "PlayerPrefs",
    letter: "P",
    entries: [
      { term: "salvar int", code: 'PlayerPrefs.SetInt("nome", valor);' },
      { term: "salvar float", code: 'PlayerPrefs.SetFloat("nome", valor);' },
      { term: "salvar string", code: 'PlayerPrefs.SetString("nome", valor);' },
      { term: "carregar int", code: 'PlayerPrefs.GetInt("nome");' },
      { term: "carregar float", code: 'PlayerPrefs.GetFloat("nome");' },
      { term: "carregar string", code: 'PlayerPrefs.GetString("nome");' },
      { term: "apagar uma chave", code: 'PlayerPrefs.DeleteKey("nome");' },
      { term: "apagar tudo (PlayerPrefs)", code: "PlayerPrefs.DeleteAll();" },
    ],
  },
  {
    id: "interface-ui",
    title: "Interface UI",
    letter: "I",
    entries: [
      { term: "importar ui", code: "using UnityEngine.UI;" },
      { term: "pegar texto", code: "GetComponent<Text>()" },
      { term: "mudar texto", code: 'texto.text = "novo texto";' },
      { term: "pegar imagem", code: "GetComponent<Image>()" },
      { term: "mudar cor da imagem", code: "imagem.color = Color.red;" },
    ],
  },
  {
    id: "cores",
    title: "Cores",
    letter: "C",
    entries: [
      { term: "vermelho", code: "Color.red" },
      { term: "azul", code: "Color.blue" },
      { term: "verde", code: "Color.green" },
      { term: "branco", code: "Color.white" },
      { term: "preto", code: "Color.black" },
      { term: "amarelo", code: "Color.yellow" },
      { term: "cor personalizada", code: "new Color(r, g, b, a)" },
    ],
  },
  {
    id: "vetores",
    title: "Vetores",
    letter: "V",
    entries: [
      { term: "vetor 2d", code: "Vector2" },
      { term: "vetor 3d", code: "Vector3" },
      { term: "criar vetor 3d", code: "new Vector3(x, y, z)" },
      { term: "vetor zero", code: "Vector3.zero" },
      { term: "vetor um", code: "Vector3.one" },
      { term: "frente", code: "Vector3.forward" },
      { term: "trás", code: "Vector3.back" },
      { term: "cima", code: "Vector3.up" },
      { term: "baixo", code: "Vector3.down" },
      { term: "esquerda", code: "Vector3.left" },
      { term: "direita", code: "Vector3.right" },
      { term: "distância", code: "Vector3.Distance(a, b)" },
      { term: "normalizar", code: "vetor.normalized" },
      { term: "tamanho do vetor", code: "vetor.magnitude" },
    ],
  },
  {
    id: "erros-comuns",
    title: "Erros Comuns",
    letter: "E",
    entries: [
      { term: "faltou ;", code: "erro" },
      { term: "faltou }", code: "erro" },
      { term: "faltou )", code: "erro" },
      { term: "; depois de if", code: "erro" },
      { term: "; depois de void Start()", code: "erro" },
      { term: "; depois de void Update()", code: "erro" },
      { term: "código fora da classe", code: "erro" },
      { term: "código fora da função", code: "erro" },
      { term: "usar = em vez de ==", code: "bug lógico" },
      { term: "usar == em vez de =", code: "bug lógico" },
      { term: "nome da classe diferente do arquivo", code: "erro" },
      {
        term: "regra rápida de ponto e vírgula",
        code: `if (...)                 sem ;
void Start()              sem ;
void Update()             sem ;
Debug.Log("texto");       com ;
balas--;                  com ;
int balas = 5;            com ;`,
      },
    ],
  },
];
