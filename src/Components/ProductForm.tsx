import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import image from "../assets/64c590c754d6bc13ebd90cbc_ai_product_photo_styles.jpg";

import React from "react";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

const schema = z.object({
  title: z
    .string()
    .min(3, "Title should be of at least 3 characters")
    .max(50, "Title cannot be longer than 50 characters"),
  description: z
    .string()
    .min(3, "Description should be of at least 3 characters")
    .max(100, "Description cannot not be longer than 100 characters"),
  price: z.number().min(0, "Price cannot be empty or less than 0"),
  quantity: z.number().min(0, "Quantity cannot be empty or less than 0"),
  category: z
    .string()
    .min(3, "Title should be of at least 3 characters.")
    .max(20, "Category cannot not be longer than 20 characters"),
});

type FormData = z.infer<typeof schema>;

export default function ProductForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    data = {
      ...data,
      id: uuidv4(),
      imageUrl: image,
    };

    if (!localStorage.getItem(data.id))
      localStorage.setItem(data.id, JSON.stringify(data));
    toast.success("Success");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto">
      <div className="flex flex-col gap-2 bg-gray-100 border-0 rounded-sm p-2 w-75">
        <input
          type="text"
          placeholder="Title"
          className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:border-slate-400 hover:border-slate-300"
          {...register("title")}
        />
        {errors.title && (
          <p className="text-xs text-red-400">{errors.title.message}</p>
        )}

        <input
          type="text"
          placeholder="Description"
          className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:border-slate-400 hover:border-slate-300"
          {...register("description")}
        />
        {errors.description && (
          <p className="text-xs text-red-400">{errors.description.message}</p>
        )}

        <input
          type="number"
          placeholder="Price"
          className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:border-slate-400 hover:border-slate-300"
          {...register("price", { valueAsNumber: true })}
        />
        {errors.price && (
          <p className="text-xs text-red-400">{errors.price.message}</p>
        )}

        <input
          type="number"
          placeholder="Quantity"
          className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:border-slate-400 hover:border-slate-300"
          {...register("quantity", { valueAsNumber: true })}
        />
        {errors.quantity && (
          <p className="text-xs text-red-400">{errors.quantity.message}</p>
        )}

        <input
          type="text"
          placeholder="Category"
          className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:border-slate-400 hover:border-slate-300"
          {...register("category")}
        />
        {errors.category && (
          <p className="text-xs text-red-400">{errors.category.message}</p>
        )}

        <button
          type="submit"
          className="p-2 bg-blue-500 text-white border-0 rounded-sm cursor-pointer"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
