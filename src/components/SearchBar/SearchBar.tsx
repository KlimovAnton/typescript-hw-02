import { Formik, Form, Field, FormikHelpers } from "formik";
import { IoSearch } from "react-icons/io5";
import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

import { SearchBarProps, Value } from "../../types";
import { FC } from "react";

export const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
    return (
        <header>
            <Formik
                initialValues={{ query: "" }}
                onSubmit={(values: Value, actions: FormikHelpers<Value>) => {
                    if(values.query.trim() === "") {
                        toast.error("Sorry, input is empty. Please try again!");
                        return;
                    }
                    onSearch(values.query)
                    actions.resetForm()
                }}
            >
                <Form className={css.form}>
                    <Field className={css.input} type="text" name="query"/>
                    <button className={css.button} type="submit"><IoSearch className={css.icon} size={15} />Search</button>
                </Form>
            </Formik>
            <Toaster position="top-right" reverseOrder={false} />
        </header>
    )
}