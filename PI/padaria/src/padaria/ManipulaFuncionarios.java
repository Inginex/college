package padaria;

import padaria.FuncionariosDAO;
import padaria.Funcionarios;

public class ManipulaFuncionarios {

    public static void main(String args[]) {

        FuncionariosDAO funcionarioDAO = new FuncionariosDAO();

        //Cria um funcionario e salva no banco
        Funcionarios funcionario = new Funcionarios();
        funcionario.setId(1);
        funcionario.setFuncionario("Dolly");
        funcionario.setSetor("Diretor");

        funcionarioDAO.save(funcionario);

        //Atualiza o funcionario com id = 1 com os dados do objeto funcionario1
        Funcionarios funcionario1 = new Funcionarios();
        funcionario1.setId(2);
        funcionario1.setFuncionario("Dollynho");
        funcionario1.setSetor("Encarregado");
        funcionario1.setStatus("ATIVO");

        funcionarioDAO.update(funcionario1);

        //Remove o funcionario com id = 1
        funcionarioDAO.removeById(1);

        //Lista todos os funcionarios do banco de dados
        for (Funcionarios c : funcionarioDAO.getFuncionarios()) {

            System.out.println("NOME: " + c.getFuncionario());
        }
    }
}
