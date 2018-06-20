package padaria;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import padaria.Conexao;
import padaria.Produtos;

public class ProdutoDAO {

    public void save(Produtos produto) {

        String sql = "INSERT INTO produto(nome,preco)"
                + " VALUES(?,?)";

        Connection conn = null;
        PreparedStatement pstm = null;

        try {
            //Cria uma conexão com o banco
            conn = Conexao.createConnectionToMySQL();

            //Cria um PreparedStatment, classe usada para executar a query
            pstm = conn.prepareStatement(sql);

            //Adiciona o valor do primeiro parâmetro da sql
            pstm.setString(1, produto.getProduto());
            //Adicionar o valor do segundo parâmetro da sql
            pstm.setDouble(2, produto.getPreco());

            //Executa a sql para inserção dos dados
            pstm.execute();

        } catch (Exception e) {

            e.printStackTrace();
        } finally {

            //Fecha as conexões
            try {
                if (pstm != null) {

                    pstm.close();
                }

                if (conn != null) {
                    conn.close();
                }

            } catch (Exception e) {

                e.printStackTrace();
            }
        }
    }

    public void removeById(int id) {

        String sql = "DELETE FROM produto WHERE id = ?";

        Connection conn = null;
        PreparedStatement pstm = null;

        try {
            conn = Conexao.createConnectionToMySQL();

            pstm = conn.prepareStatement(sql);

            pstm.setDouble(1, id);

            pstm.execute();

        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } finally {

            try {
                if (pstm != null) {

                    pstm.close();
                }

                if (conn != null) {
                    conn.close();
                }

            } catch (Exception e) {

                e.printStackTrace();
            }
        }
    }

    public void update(Produtos produto) {

        String sql = "UPDATE produtos SET produto = ?, preco = ?"
                + " WHERE id = ?";

        Connection conn = null;
        PreparedStatement pstm = null;

        try {
            //Cria uma conexão com o banco
            conn = Conexao.createConnectionToMySQL();

            //Cria um PreparedStatment, classe usada para executar a query
            pstm = conn.prepareStatement(sql);

            //Adiciona o valor do primeiro parâmetro da sql
            pstm.setString(1, produto.getProduto());
            //Adicionar o valor do segundo parâmetro da sql
            pstm.setDouble(2, produto.getPreco());

            pstm.setDouble(4, produto.getId());

            //Executa a sql para inserção dos dados
            pstm.execute();

        } catch (Exception e) {

            e.printStackTrace();
        } finally {

            //Fecha as conexões
            try {
                if (pstm != null) {

                    pstm.close();
                }

                if (conn != null) {
                    conn.close();
                }

            } catch (Exception e) {

                e.printStackTrace();
            }
        }
    }

    public List<Produtos> getProdutos() {

        String sql = "SELECT * FROM produto";

        List<Produtos> produtos = new ArrayList<Produtos>();

        Connection conn = null;
        PreparedStatement pstm = null;
        //Classe que vai recuperar os dados do banco de dados
        ResultSet rset = null;

        try {
            conn = Conexao.createConnectionToMySQL();

            pstm = conn.prepareStatement(sql);

            rset = pstm.executeQuery();

            //Enquanto existir dados no banco de dados, faça
            while (rset.next()) {

                Produtos produto = new Produtos();

                //Recupera o id do banco e atribui ele ao objeto
                produto.setId(rset.getInt("id"));

                //Recupera o produto do banco e atribui ele ao objeto
                produto.setProduto(rset.getString("nome"));

                //Recupera a preco do banco e atribui ele ao objeto
                produto.setPreco(rset.getDouble("preco"));

                //Adiciono o produto recuperado, a lista de produtos
                produtos.add(produto);
            }
        } catch (Exception e) {

            e.printStackTrace();
        } finally {

            try {

                if (rset != null) {

                    rset.close();
                }

                if (pstm != null) {

                    pstm.close();
                }

                if (conn != null) {
                    conn.close();
                }

            } catch (Exception e) {

                e.printStackTrace();
            }
        }

        return produtos;
    }
}
