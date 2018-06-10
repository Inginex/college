package padaria;

import padaria.FuncionariosDAO;
import padaria.Funcionarios;

public class ManipulaFuncionarios {
 
public static void main(String args[]){
 
 FuncionariosDAO funcionarioDAO = new FuncionariosDAO();
 
 //Cria um funcionario e salva no banco
 Funcionarios funcionario = new Funcionarios();
 funcionario.setId(1);
 funcionario.setFuncionario("Dolly");
 funcionario.setCargo("Diretor");
 funcionario.setEndereco("R Dolly");
 funcionario.setContato("31 3471-4666");

 
 funcionarioDAO.save(funcionario);
 
 //Atualiza o funcionario com id = 1 com os dados do objeto funcionario1
 Funcionarios funcionario1 = new Funcionarios();
 funcionario1.setId(2);
 funcionario1.setFuncionario("Dollynho");
 funcionario1.setCargo("Encarregado");
 funcionario1.setEndereco("R Dolly");
 funcionario1.setContato("31 3471-4500");
 
 funcionarioDAO.update(funcionario1);
 
 //Remove o funcionario com id = 1
 
 funcionarioDAO.removeById(1);
 
 //Lista todos os funcionarios do banco de dados
 
 for(Funcionarios c : funcionarioDAO.getFuncionarios()){
 
 System.out.println("NOME: " + c.getFuncionario());
 }
 }
}
