package model.dao;

import connection.ConnectionFactory;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.swing.JOptionPane;
import model.bean.ItensComanda;

public class ItensComandaDAO {
    public void create(ItensComanda ic){
        Connection con = ConnectionFactory.getConnection();
        PreparedStatement stmt = null;
        
        try {
            stmt = con.prepareStatement("INSERT INTO itens_comanda (id_comanda, id_produto, quantidade) VALUES(?,?,?)");
            stmt.setInt(1, ic.getIdComanda());
            stmt.setInt(2, ic.getIdProduto());
            stmt.setInt(3, ic.getQuantidade());
            
            stmt.executeUpdate();
            JOptionPane.showMessageDialog(null, "Salvo com sucesso!");
        } catch (SQLException ex) {
            JOptionPane.showMessageDialog(null, "Error ao salvar: "+ex);
        } finally {
            ConnectionFactory.closeConnection(con, stmt);
        }
    }
    
    public List<ItensComanda> read(){
        Connection con = ConnectionFactory.getConnection();
        PreparedStatement stmt = null;
        ResultSet rs = null;
        
        List<ItensComanda> ItensComandas = new ArrayList<>();
        
        try {
            stmt = con.prepareStatement("SELECT * FROM itens_comanda");
            rs = stmt.executeQuery();
            
            while(rs.next()){
                ItensComanda itensComanda = new ItensComanda();
                itensComanda.setId(rs.getInt("id"));
                itensComanda.setIdComanda(rs.getInt("id_comanda"));
                itensComanda.setIdProduto(rs.getInt("id_produto"));
                itensComanda.setQuantidade(rs.getInt("quantidade"));

                ItensComandas.add(itensComanda);
            }
            
        } catch (SQLException ex) {
            Logger.getLogger(ItensComandaDAO.class.getName()).log(Level.SEVERE, null, ex);
        } finally {
            ConnectionFactory.closeConnection(con, stmt, rs);
        }
        
        return ItensComandas;
    }
    
    public void update(ItensComanda ic){
        Connection con = ConnectionFactory.getConnection();
        PreparedStatement stmt = null;
        
        try {
            stmt = con.prepareStatement("UPDATE itens_comanda SET id_comanda = ?, id_produto = ?, quantidade = ? WHERE id = ?");
            stmt.setInt(1, ic.getIdComanda());
            stmt.setInt(2, ic.getIdProduto());
            stmt.setInt(3, ic.getQuantidade());
            stmt.setInt(4, ic.getId());
            
            stmt.executeUpdate();
            JOptionPane.showMessageDialog(null, "Atualizado com sucesso!");
        } catch (SQLException ex) {
            JOptionPane.showMessageDialog(null, "Error ao salvar: "+ex);
        } finally {
            ConnectionFactory.closeConnection(con, stmt);
        }
    }
    
    public void delete(ItensComanda ic){
        Connection con = ConnectionFactory.getConnection();
        PreparedStatement stmt = null;
        
        try {
            stmt = con.prepareStatement("DELETE FROM itens_comanda WHERE id = ?");
            stmt.setInt(1, ic.getId());
            
            stmt.executeUpdate();
            JOptionPane.showMessageDialog(null, "Excluido com sucesso!");
        } catch (SQLException ex) {
            JOptionPane.showMessageDialog(null, "Error ao excluir: "+ex);
        } finally {
            ConnectionFactory.closeConnection(con, stmt);
        }
    }
}
