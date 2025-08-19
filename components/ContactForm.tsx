"use client";

import { useState } from "react";
import React from "react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { ContactFormData, contactFormSchema } from "@/lib/formValidation";

const options = [
  "General inquiry",
  "Job or interview opportunity",
  "Project collaboration",
  "Speaking or event invitation",
  "Just saying hi",
];

export interface formData {
  firstname?: string;
  lastname?: string;
  email: string;
  reason: string[];
  message: string;
}

const ContactForm = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState<Response | formData>();
  const [formState, setFormState] = useState<ContactFormData>({
    firstname: "",
    lastname: "",
    email: "",
    reason: [],
    message: "",
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({});

  const filtered =
    query === ""
      ? options
      : options.filter((opt) =>
          opt.toLowerCase().includes(query.toLowerCase())
        );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = contactFormSchema.safeParse(formState);

    if (!result.success) {
      // map Zod errors into simple { field: message } format
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((err) => {
        const field = err.path[0] as string;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({}); // clear errors if valid

    const response = await fetch("api/send", {
      method: "POST",
      body: JSON.stringify(formState),
    });
    setData(response);

    setFormState({
      firstname: "",
      lastname: "",
      email: "",
      reason: [],
      message: "",
    });
  };

  return (
    <div className="shadow-input mx-auto w-full max-w-md rounded-md bg-none p-4 md:rounded-2xl md:p-8 dark:bg-none border-violet-200 border">
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
        Reach out!
      </h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
        You'd never know if you never ask
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-2 mb-4 md:flex-row md:space-y-0 md:mb-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input
              id="firstname"
              placeholder="Jane"
              type="text"
              value={formState.firstname}
              onChange={handleChange}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input
              id="lastname"
              placeholder="Doe"
              type="text"
              value={formState.lastname}
              onChange={handleChange}
            />
          </LabelInputContainer>
        </div>

        <LabelInputContainer>
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="your.name@emailprovider.com"
            type="email"
            value={formState.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="reason">Reason</Label>
          <Combobox
            value={formState.reason}
            onChange={(value: string[]) =>
              setFormState((prev) => ({ ...prev, reason: value }))
            }
            multiple
            immediate
          >
            <div className="relative">
              <ComboboxInput
                as={Input}
                placeholder="Why are you reaching out to me"
                onChange={(e) => setQuery(e.target.value)}
                displayValue={(items: string[]) => items.join(", ")}
              />
              <ComboboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-zinc-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-sm">
                {filtered.map((item) => (
                  <ComboboxOption
                    key={item}
                    value={item}
                    className={({ active, selected }) =>
                      `cursor-pointer select-none px-4 py-2 ${
                        active
                          ? "bg-blue-100 dark:bg-zinc-700"
                          : selected
                            ? "bg-blue-50 dark:bg-zinc-700"
                            : ""
                      }`
                    }
                  >
                    {({ selected }) => (
                      <span className="flex justify-between">
                        {item}
                        {selected && <span>✅</span>}
                      </span>
                    )}
                  </ComboboxOption>
                ))}
              </ComboboxOptions>
            </div>
          </Combobox>
          {errors.reason && (
            <p className="text-red-500 text-sm">{errors.reason}</p>
          )}
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="message">Message</Label>
          <Input
            id="message"
            placeholder="I love to read practically anything, so write on..."
            type="textarea"
            value={formState.message}
            onChange={handleChange}
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}
        </LabelInputContainer>

        <button
          className="group/btn relative block mt-4 h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          Send &rarr;
        </button>

        {/* <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" /> */}
      </form>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className="flex w-full flex-col space-y-2 mb-4">{children}</div>;
};

export default ContactForm;
