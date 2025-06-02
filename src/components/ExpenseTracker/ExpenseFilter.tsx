import categories from "./Categories";

export const ExpenseFilter = ({
  setCategory,
}: {
  setCategory: (category: string) => void;
}) => {
  return (
    <div className="mb-3">
      <select
        onChange={(event) => setCategory(event.target.value)}
        className="form-select"
      >
        <option value=""></option>

        {categories.map((item: string) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
