package padaria;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import padaria.Conexao;
import padaria.ItensComanda;

public class ItensComandaDAO {

    public void save(ItensComanda itensComanda) {
        String sql = "INSERT INTO itens_comanda(id_comanda,id_produto,quantidade)"
                + " VALUES(?,?,?)";

        Connection conn = null;
        PreparedStatement pstm = null;

        try {
            //Cria uma conexão com o banco
            conn = Conexao.createConnectionToMySQL();

            //Cria um PreparedStatment, classe usada para executar a query
            pstm = conn.prepareStatement(sql);

            //Adiciona o valor do primeiro parâmetro da sql
            pstm.setInt(1, itensComanda.getIdCom());
            //Adicionar o valor do segundo parâmetro da sql
            pstm.setInt(2, itensComanda.getQuantidade());
            //Adiciona o valor do terceiro parâmetro da sql
            pstm.setInt(3, itensComanda.getProduto());
            //Adiciona o valor do quarto parâmetro da sql

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

        String sql = "DELETE FROM comanda WHERE id = ?";

        Connection conn = null;
        PreparedStatement pstm = null;

        try {
            conn = Conexao.createConnectionToMySQL();

            pstm = conn.prepareStatement(sql);

            pstm.setInt(1, id);

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

    public void update(ItensComanda itensComanda) {

        String sql = "UPDATE comanda SET quantidade = ?, produto = ?"
                + " WHERE id = ?";

        Connection conn = null;
        PreparedStatement pstm = null;

        try {
            //Cria uma conexão com o banco
            conn = Conexao.createConnectionToMySQL();

            //Cria um PreparedStatment, classe usada para executar a query
            pstm = conn.prepareStatement(sql);

            //Adiciona o valor do primeiro parâmetro da sql
            pstm.setInt(1, itensComanda.getId());
            //Adicionar o valor do segundo parâmetro da sql
            pstm.setInt(2, itensComanda.getQuantidade());
            //Adiciona o valor do terceiro parâmetro da sql
            pstm.setInt(3, itensComanda.getProduto());

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

    public List<ItensComanda> getItensComanda() {

        String sql = "SELECT * FROM itens_comanda";

        List<ItensComanda> itensComanda = new ArrayList<ItensComanda>();

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

                Comanda comanda = new Comanda();

                //Recupera o id do banco e atribui ele ao objeto
                comanda.setId(rset.getInt("id"));

                //Recupera o comanda do banco e atribui ele ao objeto
                comanda.setProduto(rset.getInt("quantidade"));

                //Recupera a preco do banco e atribui ele ao objeto
                comanda.setQuantidade(rset.getInt("produto"));

                ItensComanda.add(itensComanda);

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

        return itensComanda;
    }
}
