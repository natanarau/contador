import React from "react";
import * as S from "./styles";

type AccountantType = {
  count: number;
  date: string;
};

export default function Accountant() {
  const [count, setCount] = React.useState(0);
  const [accountant, setAccountant] = React.useState<AccountantType[]>(
    JSON.parse(localStorage.getItem("accountant") || "[]")
  );

  React.useEffect(() => {
    localStorage.setItem("accountant", JSON.stringify(accountant));
  }, [accountant]);

  const date = new Date().toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const handleCount = () => {
    if (count === 0) {
      return alert("Precisa que o valor seja maior que 0");
    } else {
      setAccountant([
        {
          count: count,
          date: date,
        },
        ...accountant,
      ]);

      setCount(0);
    }
  };

  const removeItem = (index: any) => {
    accountant.splice(index, 1);
    setAccountant([...accountant]);
  };

  return (
    <S.Container>
      <S.Button autoFocus onClick={() => setCount(count + 2)} title="Contar">
        <p>Click</p>
      </S.Button>
      <S.Count>
        <h2>{count}</h2>
        <label>Clicks</label>
      </S.Count>
      <S.Flex style={{ gap: "10px" }}>
        <S.ButtonSave onClick={handleCount} title="Salvar item">
          Salvar
        </S.ButtonSave>
        <S.ButtonClea onClick={() => setCount(0)}>Zerar</S.ButtonClea>
      </S.Flex>
      <S.Reports>
        {accountant.map((value, index) => (
          <S.ReportItem key={index}>
            <S.Close
              src="img/trash.svg"
              alt="Deletar item"
              title="Deletar item"
              onClick={() => removeItem(index)}
            />
            <S.Flex
              style={{
                gap: "20px",
                padding: "10px",
                justifyContent: "space-around",
              }}
            >
              <S.Grid style={{ justifyItems: "center", textAlign: "center" }}>
                <h6>Dia</h6>
                <h4>
                  {value.date.split(",")[0]}
                  <br />
                  {value.date.split(",")[1]}
                </h4>
              </S.Grid>
              <S.Grid style={{ justifyItems: "center" }}>
                <h6>Clicks</h6>
                <h2>{value.count}</h2>
              </S.Grid>
            </S.Flex>
          </S.ReportItem>
        ))}
      </S.Reports>
    </S.Container>
  );
}
