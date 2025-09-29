import React from 'react'
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import FloatingCoins from '@/components/authentication/FloatingCoins';
import './page.css';
// shadcn/ui
import { Form, FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm } from 'react-hook-form';
import { LuHeart } from 'react-icons/lu';
import { AuthenInput } from '@/components/inputs/AuthenInput';
import UserService from '@/services/UserService';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import { jwtDecode } from 'jwt-decode';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateUser } from '@/redux/features/userSlice';
const schema = z
    .object({
        email: z
            .string()
            .nonempty("Email là bắt buộc")
            .email("Email không hợp lệ"),
        password: z
            .string()
            .nonempty("Mật khẩu là bắt buộc")
            .min(6, "Mật khẩu phải có ít nhất 8 ký tự"),
    })
const LoginPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const onSubmit = async (data) => {
        try {
            const response = await UserService.login(data);
            if (response) {
                console.log('response', response)
                localStorage.setItem('access_token_user', JSON.stringify(response.token));
                if (response.token !== null && response.verified === true) {
                    const decoded = jwtDecode(response.token);
                    if (decoded?.id) {
                        handleGetDetailsUser(decoded?.id, response.token)
                    }
                    toast.success('Đăng nhập thành công');
                    setTimeout(() => {
                        window.location.href = '/';
                    }, 2000);
                } else {
                    const response = await UserService.resendVerificationEmail(data);
                    setTimeout(() => {
                        navigate('/email-sent', {
                            state: {
                                email: data.email
                            }
                        });
                    }, 2000);
                }
            } else {
                toast.error(response.message || 'Login failed');
            }
        } catch (error) {
            toast.error('An error occurred');
        }
    };

    const handleGetDetailsUser = async (id, token) => {
        const res = await UserService.getCurrentUser()
        dispatch(updateUser({ ...res, access_token: token }))
    }

    return (
        <>
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
            <div className="min-h-screen flex">
                {/* Left Side - Illustration */}
                <div className="flex-1 bg-gradient-to-br from-orange-400 to-orange-500 flex flex-col items-center justify-center relative overflow-hidden">
                    {/* Logo */}
                    <div className="flex-1 flex items-center justify-center contentLeft">

                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="flex-1 bg-white flex items-center justify-center p-8">
                    <div className="w-full max-w-md">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                            Đăng nhập tài khoản
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

                                {/* Submit */}
                                <Button type="submit" className="w-full">
                                    Đăng nhập
                                </Button>
                            </form>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginPage