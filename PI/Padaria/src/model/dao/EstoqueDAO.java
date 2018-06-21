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
import model.bean.Estoque;

public class EstoqueDAO {
    public void create(Estoque e){
        Connection con = ConnectionFactory.getConnection();
        PreparedStatement stmt = null;
        
        try {
            stmt = con.prepareStatement("INSERT INTO estoque (codigo_produto, quantidade, funcionario) VALUES(?,?,?)");
            stmt.setInt(1, e.getCodigoProduto());
            stmt.setInt(2, e.getQuantidade());
            stmt.setInt(3, e.getFuncionario());
            
            stmt.executeUpdate();
            JOptionPane.showMessageDialog(null, "Salvo com sucesso!");
        } catch (SQLException ex) {
            JOptionPane.showMessageDialog(null, "Error ao salvar: "+ex);
        } finally {
            ConnectionFactory.closeConnection(con, stmt);
        }
    }
    
    public List<Estoque> read(){
        Connection con = ConnectionFactory.getConnection();
        PreparedStatement stmt = null;
        ResultSet rs = null;
        
        List<Estoque> estoques = new ArrayList<>();
        
        try {
            stmt = con.prepareStatement("SELECT * FROM estoque");
            rs = stmt.executeQuery();
            
            while(rs.next()){
                Estoque estoque = new Estoque();
                estoque.setId(rs.getInt("id"));
                estoque.setCodigoProduto(rs.getInt("codigo_produto"));
                estoque.setQuantidade(rs.getInt("quantidade"));
                estoque.setFuncionario(rs.getInt("funcionario"));

                estoques.add(estoque);
            }
            
        } catch (SQLException ex) {
            Logger.getLogger(EstoqueDAO.class.getName()).log(Level.SEVERE, null, ex);
        } finally {
            ConnectionFactory.closeConnection(con, stmt, rs);
        }
        
        return estoques;
    }
    
    public void update(Estoque e){
        Connection con = ConnectionFactory.getConnection();
        PreparedStatement stmt = null;
        
        try {
            stmt = con.prepareStatement("UPDATE estoque SET codigo_produto = ?, quantidade = ?, funcionario = ? WHERE id = ?");
            stmt.setInt(1, e.getCodigoProduto());
            stmt.setInt(2, e.getQuantidade());
            stmt.setInt(3, e.getFuncionario());
            stmt.setInt(4, e.getId());
            
            stmt.executeUpdate();
            JOptionPane.showMessageDialog(null, "Atualizado com sucesso!");
        } catch (SQLException ex) {
            JOptionPane.showMessageDialog(null, "Error ao salvar: "+ex);
        } finally {
            ConnectionFactory.closeConnection(con, stmt);
        }
    }
    
    public void delete(Estoque e){
        Connection con = ConnectionFactory.getConnection();
        PreparedStatement stmt = null;
        
        try {
            stmt = con.prepareStatement("DELETE FROM estoque WHERE id = ?");
            stmt.setInt(1, e.getId());
            
            stmt.executeUpdate();
            JOptionPane.showMessageDialog(null, "Excluido com sucesso!");
        } catch (SQLException ex) {
            JOptionPane.showMessageDialog(null, "Error ao excluir: "+ex);
        } finally {
            ConnectionFactory.closeConnection(con, stmt);
        }
    }
}
