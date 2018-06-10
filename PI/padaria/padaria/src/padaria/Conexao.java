/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package padaria;

//Observação para que este projeto funcione você deverá adicionar no projeto a bibioteca MySQL

import com.mysql.jdbc.Connection;
import java.sql.Statement;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;

/**
 *
 * @author Thiago Hofman
 */
public class Conexao {
    String dbURL = "jdbc:mysql://localhost:3306/padara";
    String username = "root";
    String password = "";
    Connection conn;
    
    public Conexao()
    {        
    }
    
    private boolean Conectar()
    {
        try{
            conn = (Connection) DriverManager.getConnection(dbURL, username, password);
            return conn == null;        
        } catch (SQLException ex) {
            return false;
        }    
    }
    
    public int ExecutarComandoSQL(String sql)
    {
        try{
            Conectar();        
            Statement comando = conn.createStatement();
            int linhasAlteradas = comando.executeUpdate(sql);
            conn.close();
            if (linhasAlteradas > 0) {
                System.out.println("Comando Executado com Sucesso");            
            }
            System.out.println(linhasAlteradas + " linhas afetadas");
            return linhasAlteradas;        
        } catch (SQLException ex) {
            return 0;
        }    
    }
    
    public ResultSet ExecultarConsultaSQL(String sql) 
    {
        try{
            Conectar();
            Statement comando = conn.createStatement();    
            ResultSet result = comando.executeQuery(sql);
//            conn.close();
            return result;
        } catch (SQLException ex) {
            return null;
        }    
    }    
}