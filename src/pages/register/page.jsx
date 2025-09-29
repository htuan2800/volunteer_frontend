import React, { useState } from 'react';

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
// shadcn/ui
import { Form, FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { AuthenInput } from '@/components/inputs/AuthenInput';
import './page.css';
import UserService from '@/services/UserService';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
// Simulating zod validation (since we don't have access to zod library)
const schema = z
    .object({
        email: z
            .string()
            .nonempty("Email là bắt buộc")
            .email("Email không hợp lệ"),
        fullName: z
            .string()
            .nonempty("Họ tên là bắt buộc")
            .min(2, "Họ tên phải có ít nhất 2 ký tự"),
        password: z
            .string()
            .nonempty("Mật khẩu là bắt buộc")
            .min(6, "Mật khẩu phải có ít nhất 8 ký tự"),
        confirmPassword: z
            .string()
            .nonempty("Xác nhận mật khẩu là bắt buộc"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        path: ["confirmPassword"], // báo lỗi ở confirmPassword
        message: "Mật khẩu xác nhận không khớp",
    });

const RegisterPage = () => {
    const navigate = useNavigate();
    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            email: '',
            fullName: '',
            password: '',
            confirmPassword: ''
        }
    });

    const onSubmit = async (data) => {
        try {
            // Đăng ký tài khoản
            const registerResponse = await UserService.register(data);
            if (registerResponse.success === true) {
                toast.success('Đăng kí thành công');
                // console.log('Encoded data:', encodedData);
                setTimeout(() => {
                    navigate('/email-sent', {
                        state: {
                            email: data.email
                        }
                    });
                }, 2000);
            } else {
                toast.error(
                    "Có lỗi xảy ra trong quá trình đăng ký"
                );
            }
            // console.log(form.formState.isSubmitting);
            // console.log(data);
        } catch (error) {
            // Log chi tiết lỗi
            console.error('Đăng ký thất bại:', error.response?.data?.message);
            // Hiển thị thông báo lỗi cụ thể
            toast.error(
                "Có lỗi xảy ra trong quá trình đăng ký"
            );
        }
    };

    return (
        <div className="min-h-screen flex">
            <ToastContainer
                position="top-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
            {/* Left Side - Illustration */}
            <div className="flex-1 bg-gradient-to-br from-orange-400 to-orange-500 flex flex-col items-center justify-center relative overflow-hidden">
                {/* Logo */}
                <div className="flex-1 flex items-center justify-center contentLeft">
                </div>
                {/* Navigation dots */}
                {/* <div className="absolute bottom-8 flex space-x-2">
                    <div className="w-3 h-3 bg-white rounded-full">
                    </div>
                    <div className="w-3 h-3 bg-white/50 rounded-full">
                    </div>
                    <div className="w-3 h-3 bg-white/30 rounded-full">
                    </div>
                </div> */}
            </div>

            {/* Right Side - Form */}
            <div className="flex-1 bg-white flex items-center justify-center p-8">
                <div className="w-full max-w-md">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                        Đăng ký tài khoản
                    </h2>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-sm space-y-4">
                            {/* Email */}
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <AuthenInput
                                                type="email"
                                                placeholder="Nhập địa chỉ email"
                                                error={!!form.formState.errors.email}
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Full Name */}
                            <FormField
                                control={form.control}
                                name="fullName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <AuthenInput
                                                type="fullName"
                                                placeholder="Nhập họ tên của bạn"
                                                error={!!form.formState.errors.fullName}
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Password */}
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <AuthenInput
                                                type="password"
                                                placeholder="Nhập mật khẩu"
                                                error={!!form.formState.errors.password}
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Confirm Password */}
                            <FormField
                                control={form.control}
                                name="confirmPassword"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <AuthenInput
                                                type="password"
                                                placeholder="Nhập lại mật khẩu"
                                                error={!!form.formState.errors.confirmPassword}
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Submit */}
                            <Button type="submit" className={`w-full  ${form.formState.isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={form.formState.isSubmitting}>
                                Đăng ký
                            </Button>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;