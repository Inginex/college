package padaria;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import padaria.Conexao;
import padaria.Comanda;

public class ComandaDAO {

    public void save(Comanda comanda) {
        String sql = "INSERT INTO comanda(comanda,preco)"
                + " VALUES(?,?)";

        Connection conn = null;
        PreparedStatement pstm = null;

        try {
            //Cria uma conexão com o banco
            conn = Conexao.createConnectionToMySQL();

            //Cria um PreparedStatment, classe usada para executar a query
            pstm = conn.prepareStatement(sql);

            //Adiciona o valor do primeiro parâmetro da sql
            pstm.setInt(1, comanda.getId());
            //Adicionar o valor do segundo parâmetro da sql
            pstm.setInt(2, comanda.getQuantidade());
            //Adiciona o valor do terceiro parâmetro da sql
            pstm.setInt(3, comanda.getProduto());
            //Adiciona o valor do quarto parâmetro da sql
            pstm.setInt(4, comanda.getCPF());
            //Adiciona o valor do quinto parâmetro da sql
            pstm.setInt(5, comanda.getCodigoFunc());
            //Adiciona o valor do setimo parâmetro da sql
            pstm.setString(7, comanda.getNomeComp());
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

    public void update(Comanda comanda) {

        String sql = "UPDATE comanda SET comanda = ?, preco = ?"
                + " WHERE id = ?";

        Connection conn = null;
        PreparedStatement pstm = null;

        try {
            //Cria uma conexão com o banco
            conn = Conexao.createConnectionToMySQL();

            //Cria um PreparedStatment, classe usada para executar a query
            pstm = conn.prepareStatement(sql);

            //Adiciona o valor do primeiro parâmetro da sql
            pstm.setInt(1, comanda.getId());
            //Adicionar o valor do segundo parâmetro da sql
            pstm.setInt(2, comanda.getQuantidade());
            //Adiciona o valor do terceiro parâmetro da sql
            pstm.setInt(3, comanda.getProduto());
            //Adiciona o valor do quarto parâmetro da sql
            pstm.setInt(4, comanda.getCPF());
            //Adiciona o valor do quinto parâmetro da sql
            pstm.setInt(5, comanda.getCodigoFunc());
            //Adiciona o valor do setimo parâmetro da sql
            pstm.setString(7, comanda.getNomeComp());
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

    public List<Comanda> getComanda() {

        String sql = "SELECT * FROM comanda";

        List<Comanda> comandas = new ArrayList<Comanda>();

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
                comanda.setProduto(rset.getInt("comanda"));

                //Recupera a preco do banco e atribui ele ao objeto
                comanda.setQuantidade(rset.getInt("preco"));

                comandas.add(comanda);

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

        return comandas;
    }
}
