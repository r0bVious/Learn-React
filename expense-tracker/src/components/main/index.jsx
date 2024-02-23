import { useDisclosure, Flex, Heading, Button } from "@chakra-ui/react";
import Summary from "../summary";
import ExpenseView from "../expense-view";
import { GlobalContext } from "../../context";
import { useContext, useEffect } from "react";

export default function Main() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    totalExpense,
    setTotalExpense,
    totalIncome,
    setTotalIncome,
    allTransactions,
  } = useContext(GlobalContext);

  useEffect(() => {
    let income = 0;
    let expense = 0;
    allTransactions.forEach((item) => {
      item.type === "income"
        ? (income = income + parseFloat(item.amount))
        : (expense = expense + parseFloat(item.amount));
    });

    setTotalExpense(expense);
    setTotalIncome(income);
  }, [allTransactions]);
  return (
    <Flex textAlign={"center"} flexDirection={"column"} pr={"5"} pl={"5"}>
      <Flex alignItems={"center"} justifyContent={"space-between"} mt={"12"}>
        <Heading
          color={"blue.400"}
          display={["none", "block", "block", "block", "block"]}
        >
          Expense Tracker
        </Heading>
        <Flex alignItems={"center"}>
          <Button onClick={onOpen} bg={"blue.300"} color={"black"} ml={"4"}>
            Add New Transaction
          </Button>
        </Flex>
      </Flex>
      <Summary
        isOpen={isOpen}
        onClose={onClose}
        totalExpense={totalExpense}
        totalIncome={totalIncome}
      />
      <Flex
        w="full"
        alignItems={"flex-start"}
        justifyContent={"space-evenly"}
        flexDirection={["column", "column", "column", "row", "row"]}
      >
        <ExpenseView
          type={"expense"}
          data={allTransactions.filter((item) => item.type === "expense")}
        />
        <ExpenseView
          type={"income"}
          data={allTransactions.filter((item) => item.type === "income")}
        />
      </Flex>
    </Flex>
  );
}
