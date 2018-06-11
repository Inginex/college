package padaria;

public class Funcionarios {

    private int id;
    private String nome_fun;
    private String setor;
    private String status;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFuncionario() {
        return nome_fun;
    }

    public void setFuncionario(String nome_fun) {
        this.nome_fun = nome_fun;
    }

    public String getCargo() {
        return setor;
    }

    public void setSetor(String cargo) {
        this.setor = cargo;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
