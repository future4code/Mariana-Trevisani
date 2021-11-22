### Exercício 1 

a) 
- VARCHAR é utilizado para strings e (255) é o valor de caracteres padrão.
- PRIMARY KEY utilizado para definir o campo de chave primária;
- DATE para datas;

b) 

c) Mostra os campos da tabela Actor e o tipo de entrada esperada para cada campo.



### Exercício 2

a) INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);

b) O erro acontece porque o id foi definido como uma Primary Key e elas são únicas para cada ator criado, e esse id já está em uso.

c) Os campos birth_date e gender não foram informados junto com os demais campos na lista após o nome da tabela gerando o erro.
 Forma correta: 

 INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

d) Não foi informado o name que é um item obrigatório.

forma correta:
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Nome do ator",
  400000,
  "1949-04-18", 
  "male"
);

e) O valor do campo birth_date precisa estar entre "".

forma correta:
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

f) INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Pedro Bandeira",
  500000,
  1979-05-26, 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Carolina Dickman",
  400000,
  1985-05-06, 
  "female"
);

### Exercício 3

a) 
SELECT * from Actor 
WHERE gender = "female"

b)
SELECT salary from Actor 
WHERE name = "Tony Ramos"

c)
SELECT * from Actor 
WHERE gender = "invalid"

d)
SELECT id, name, salary from Actor 
WHERE salary < 500000

e) O campo nome não existe, está errado é name.

corrigindo:
SELECT id, name from Actor WHERE id = "002"
