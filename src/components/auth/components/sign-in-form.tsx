"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormSuccess } from "./form-message/FormSucess";
import { FormError } from "./form-message/FormError";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { Loader } from "lucide-react";

const formSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: "Password need to be at least 6 characters" }),
});

export const SignInForm = () => {
  const [success, setSuccess] = useState<string | undefined>("");
  const [error, setError] = useState<string | undefined>("");
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (vlaues: z.infer<typeof formSchema>) => {
    const { data, error } = await authClient.signIn.email(
      {
        email: vlaues.email,
        password: vlaues.password,
        callbackURL: "/",
      },
      {
        onRequest: (ctx) => {
          setLoading(true);
        },
        onSuccess: (ctx) => {
          setLoading(false);
          toast.success(ctx.response.text);
          setSuccess('Sign-in successfull')
        },
        onError: (ctx) => {
          setLoading(false);
          toast.error(ctx?.error?.message || "Server error");
        },
      }
    );
    if (error) {
      setError(error?.message);
      setTimeout(() => {
        setError("");
      }, 5000);
      setSuccess("");
    }
    if (data) {
    }
  };
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
          <div className=" flex flex-col space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="john@gmail.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input disabled={loading} placeholder="******" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormSuccess message="" />
          <FormError message={error} />
          <Button className=" w-full" type="submit">
            {loading ? (
              <Loader className=" animate-spin size-4" />
            ) : (
              <p className="text-accent">Submit</p>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};
