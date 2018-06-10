package padaria;

public class Comanda {
 
private int id_comanda;
 private int qtd_produto;
 private int id_produto;
 
 public int getId() {
 return id_comanda;
 }
 
 public void setId(int id_comanda) {
 this.id_comanda = id_comanda;
 }
 
 public int getQuantidade() {
 return qtd_produto;
 }
 
 public void setQuantidade(int qtd_produto) {
 this.qtd_produto = qtd_produto;
 }
 
 public int getProduto() {
 return id_produto;
 }
 
 public void setProduto(int id_produto) {
 this.id_produto = id_produto;
 }

}
