package padaria;

import java.sql.Connection;
import java.sql.DriverManager;
 
public class Conexao {
 
   private static final String USERNAME = "root";
 
   private static final String PASSWORD = "root";
 
   private static final String DATABASE_URL = "jdbc:mysql://localhost:3306/agenda";

   public static Connection createConnectionToMySQL() throws Exception{
      Class.forName("com.mysql.jdbc.Driver"); 
 
      Connection connection = DriverManager.getConnection(DATABASE_URL, USERNAME, PASSWORD);
 
      return connection;
   }
   public static void main(String[] args) throws Exception{
 
      //Recupera uma conexão com o banco de dados
      Connection con = createConnectionToMySQL();
 
      //Testa se a conexão é nula
      if(con != null){
         System.out.println("Conexão obtida com sucesso!" + con);
         con.close();
      }
 
   }
}