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
import model.bean.Comanda;

public class ComandaDAO {
    public void create(Comanda c){
        Connection con = ConnectionFactory.getConnection();
        PreparedStatement stmt = null;
        
        try {
            stmt = con.prepareStatement("INSERT INTO comanda (cpf, codigo_funcionario, cliente) VALUES(?,?,?)");
            stmt.setString(1, c.getCpf());
            stmt.setInt(2, c.getCodigoFuncionario());
            stmt.setString(3, c.getCliente());
            
            stmt.executeUpdate();
            JOptionPane.showMessageDialog(null, "Salvo com sucesso!");
        } catch (SQLException ex) {
            JOptionPane.showMessageDialog(null, "Error ao salvar: "+ex);
        } finally {
            ConnectionFactory.closeConnection(con, stmt);
        }
    }
    
    public List<Comanda> read(){
        Connection con = ConnectionFactory.getConnection();
        PreparedStatement stmt = null;
        ResultSet rs = null;
        
        List<Comanda> comandas = new ArrayList<>();
        
        try {
            stmt = con.prepareStatement("SELECT * FROM comanda");
            rs = stmt.executeQuery();
            
            while(rs.next()){
                Comanda comanda = new Comanda();
                comanda.setCodigo(rs.getInt("codigo"));
                comanda.setCpf(rs.getString("cpf"));
                comanda.setCodigoFuncionario(rs.getInt("codigo_funcionario"));
                comanda.setCliente(rs.getString("cliente"));

                comandas.add(comanda);
            }
            
        } catch (SQLException ex) {
            Logger.getLogger(ComandaDAO.class.getName()).log(Level.SEVERE, null, ex);
        } finally {
            ConnectionFactory.closeConnection(con, stmt, rs);
        }
        
        return comandas;
    }
    
    public void update(Comanda c){
        Connection con = ConnectionFactory.getConnection();
        PreparedStatement stmt = null;
        
        try {
            stmt = con.prepareStatement("UPDATE comanda SET cpf = ?, codigo_funcionario = ?, cliente = ? WHERE codigo = ?");
            stmt.setString(1, c.getCpf());
            stmt.setInt(2, c.getCodigoFuncionario());
            stmt.setString(3, c.getCliente());
            stmt.setInt(4, c.getCodigo());
            
            stmt.executeUpdate();
            JOptionPane.showMessageDialog(null, "Atualizado com sucesso!");
        } catch (SQLException ex) {
            JOptionPane.showMessageDialog(null, "Error ao salvar: "+ex);
        } finally {
            ConnectionFactory.closeConnection(con, stmt);
        }
    }
    
    public void delete(Comanda c){
        Connection con = ConnectionFactory.getConnection();
        PreparedStatement stmt = null;
        
        try {
            stmt = con.prepareStatement("DELETE FROM comanda WHERE codigo = ?");
            stmt.setInt(1, c.getCodigo());
            
            stmt.executeUpdate();
            JOptionPane.showMessageDialog(null, "Excluido com sucesso!");
        } catch (SQLException ex) {
            JOptionPane.showMessageDialog(null, "Error ao excluir: "+ex);
        } finally {
            ConnectionFactory.closeConnection(con, stmt);
        }
    }
}
