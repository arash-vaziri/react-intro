import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";

export const Expences = () => {
  const categories = ["All", "Groceries", "Utilities", "Entertainment"];

  const schema = z.object({
    description: z.string().min(3),
    amount: z.number().min(0.1),
    categoryId: z.number().min(1),
  });

  type FormData = z.infer<typeof schema>;

  const [expences, setExpences] = useState<FormData[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    const partial: FormData[] = [...expences];

    const newEntry: FormData = {
      description: data.description ?? null,
      amount: data.amount ?? null,
      categoryId: data.categoryId ?? null,
    };

    partial.push(newEntry);

    setExpences(partial);
  };

  const removeItem = (index: number) => {
    const data = [...expences].filter((item, idx) => index !== idx);
    setExpences(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            {...register("description")}
            id="description"
            type="text"
            className="form-control"
          />
          {errors.description && (
            <p className="text-danger"> {errors.description.message} </p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            id="amount"
            type="text"
            className="form-control"
          />
          {errors.amount && (
            <p className="text-danger"> {errors.amount.message} </p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label"></label>
          <select
            {...register("categoryId", { valueAsNumber: true })}
            className="form-select"
          >
            <option value={-1} key="empty"></option>
            {categories.map((item, index) => {
              if (index == 0) return;
              return (
                <option value={index} key={`cat_${index}`}>
                  {item}
                </option>
              );
            })}
          </select>
          {errors.categoryId && (
            <p className="text-danger"> {errors.categoryId.message} </p>
          )}
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};
