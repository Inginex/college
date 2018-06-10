package padaria;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Scanner;

public class Padaria {

    static Conexao conexao = new Conexao();
    static Scanner verificarInfo = new Scanner(System.in);

    public static void main(String[] args) {
        // TODO code application logic here        
        System.out.println("Bem Vindo ao Sistema da Padaria - Quadro de funcionarios");
        System.out.println("Digite 1 para Cadastrar um novo funcionario");
        System.out.println("Digite 2 para Alterar os dados de um funcionario");
        System.out.println("Digite 3 para Demitir funcionario");
        System.out.println("Digite 4 para Listar todos os funcionarios");
        System.out.println("Digite 5 para Pesquisar funcionario");
        System.out.println("Digite 6 sair");
        int opcao = verificarInfo.nextInt();

        switch (opcao) {
            case 1:
                CadastrarFunc();
                break;
            case 2:
                AlterarInfoFunc();
                break;
            case 3:
                DemitirFunc();
                break;
            case 4:
                ListarQuadFunc();
                break;
            case 5:
                PesquisarFunc();
                break;
        }
    }

    public static void CadastrarFunc() {
        String id_func, nome_func, cargo;

        verificarInfo.nextLine();
        System.out.println("Cadastro um novo funcionario");
        System.out.println("Digite o Codigo do funcionario");
        id_func = verificarInfo.nextLine();
        System.out.println("Digite o nome do funcionario");
        nome_func = verificarInfo.nextLine();
        System.out.println("Digite o setor");
        cargo = verificarInfo.nextLine();

        String sql = "INSERT INTO funcionario VALUES ('" + id_func + "','" + nome_func + "','" + cargo + "')";
        conexao.ExecutarComandoSQL(sql);
    }

    public static void AlterarInfoFunc() {
        String id_func, nome_func, cargo;

        verificarInfo.nextLine();
        System.out.println("Alterar dados do funcionario");
        System.out.println("Digite o Codigo do funcionario");
        id_func = verificarInfo.nextLine();
        System.out.println("Digite o nome do funcionario");
        nome_func = verificarInfo.nextLine();
        System.out.println("Digite em qual setor o funcionario será inserido");
        cargo = verificarInfo.nextLine();

        conexao.ExecutarComandoSQL("UPDATE funcionario set cargo = '" + cargo + "nome_func = " + nome_func + "where id_func = " + id_func);
    }

    public static void DemitirFunc() {
        String id_func;

        verificarInfo.nextLine();
        System.out.println("Demissões de funcionarios");
        System.out.println("Digite o Codigo do Fucionarios");
        id_func = verificarInfo.nextLine();

        conexao.ExecutarComandoSQL("DELETE FROM funcionarios where id_func = " + id_func);
    }

    public static void ListarQuadFunc() {
        try {
            ResultSet result = conexao.ExecultarConsultaSQL("SELECT * FROM funcionario");

            int count = 0;

            while (result.next()) {
                String codigo = result.getString("id_func");
                String nome = result.getString("nome_func");
                String setor = result.getString("cargo");
                String output = "Funcionario #%s: - %s - %s";
                System.out.println(String.format(output, codigo, nome, setor));
                count++;
            }
            System.out.println("Existem no quadro de funcionarios " + count + " funcionario ativos");
        } catch (SQLException ex) {
        }
    }

    public static void PesquisarFunc() {
        String id_func;

        verificarInfo.nextLine();
        System.out.println("Pesquisar funcionario");
        System.out.println("Digite o Codigo do funcionario");
        id_func = verificarInfo.nextLine();
        try {
            ResultSet result = conexao.ExecultarConsultaSQL("SELECT * FROM funcionario where id_func = " + id_func);

            int count = 0;

            while (result.next()) {
                String codigo = result.getString("id_func");
                String nome = result.getString("nome_func");
                String cargo = result.getString("cargo");
                String output = "Funcionario #%s: - %s - %s";
                System.out.println(String.format(output, codigo, nome, cargo));
                count++;
            }
            System.out.println("Foram listados " + count + " funcionario");
        } catch (SQLException ex) {
        }
    }
}
