import React, { useState, useEffect } from "react";

const RequisicaoJson = () => {
  const [posts, setPosts] = useState([]);
  const [carregando, setCarregando] = useState(true);

  const buscarPosts = async () => {
    setCarregando(true);
    try {
      const resposta = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const dados = await resposta.json();
      setPosts(dados);
    } catch (erro) {
      console.error("Erro ao buscar os posts:", erro);
    }
    setCarregando(false);
  };

  useEffect(() => {
    buscarPosts();
  }, []);

  return (
    <div style={estiloContainer}>
      <h1>Lista de Posts</h1>
      {carregando ? (
        <p style={{ textAlign: "center" }}>Carregando...</p>
      ) : (
        <ul style={estiloLista}>
          {posts.map((post) => (
            <li key={post.id} style={estiloItem}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
      <button onClick={buscarPosts} style={estiloBotao}>
        Recarregar Posts
      </button>
    </div>
  );
}

const estiloContainer = {
  maxWidth: "600px",
  margin: "0 auto",
  padding: "20px",
  fontFamily: "Arial, sans-serif",
};

const estiloLista = {
  listStyle: "none",
  padding: 0,
};

const estiloItem = {
  backgroundColor: "#f4f4f4",
  padding: "10px",
  margin: "10px 0",
  borderRadius: "5px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

const estiloBotao = {
  display: "block",
  margin: "20px auto",
  padding: "10px 20px",
  backgroundColor: "#007BFF",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default RequisicaoJson
