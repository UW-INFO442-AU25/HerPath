import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GradientBackground } from "@/components/ui/gradient-background";
import HeaderComponent from "../components/HeaderComponent";

export default function AccountQuiz() {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <GradientBackground>
            <HeaderComponent />

            {/* Main content */}
            <main className="px-4 sm:px-6 py-10 sm:py-12">
                <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
                        Welcome to HerPath!
                    </h1>
                    <h2>Before you get started, we need to ask you some questions to get to know you.</h2>

                    {/* Form */}
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        {/* Age Input */}
                        <div className="bg-white/90 rounded-3xl shadow-lg border border-pink-50 px-6 sm:px-8 py-6 sm:py-8 flex flex-col items-start gap-4">
                            <Label htmlFor="age">How old are you?</Label>
                            
                            <Input
                                id="age"
                                type="number"
                                defaultValue="13"
                                min="13"
                                step="1"
                                {...register("age", {required: true})}
                                className="w-full"
                            />
                        </div>

                        {/* Personal Finance Knowledge Input */}
                        <div className="bg-white/90 rounded-3xl shadow-lg border border-pink-50 px-6 sm:px-8 py-6 sm:py-8 flex flex-col items-start gap-4">
                            <Label htmlFor="pfKnowledge">How much do you think you know about personal finance?</Label>

                            <div className="relative w-full">
                                <Input
                                    id="pfKnowledge"
                                    type="range"
                                    defaultValue="5"
                                    min="0"
                                    max="10"
                                    step="2.5"
                                    list="values"
                                    {...register("pfKnowledge", {required: true})}
                                    className="w-full h-2 
                                        appearance-none cursor-pointer 
                                        bg-pink-200 rounded-lg
                                        accent-pink-500
                                        [&::-webkit-slider-thumb]:appearance-none
                                        [&::-webkit-slider-thumb]:w-5
                                        [&::-webkit-slider-thumb]:h-5
                                        [&::-webkit-slider-thumb]:rounded-full
                                        [&::-webkit-slider-thumb]:bg-pink-500
                                        [&::-webkit-slider-thumb]:shadow-lg
                                        [&::-webkit-slider-thumb]:transition-all
                                        [&::-webkit-slider-thumb]:hover:scale-110
                                        [&::-webkit-slider-thumb]:mt-[-21px]
                                        [&::-moz-range-thumb]:w-5
                                        [&::-moz-range-thumb]:h-5
                                        [&::-moz-range-thumb]:rounded-full
                                        [&::-moz-range-thumb]:bg-pink-500
                                        [&::-moz-range-thumb]:border-none
                                    "
                                />

                                <div className="flex justify-between text-xs text-gray-600 mt-2 px-1">
                                    <span>none</span>
                                    <span>a lot</span>
                                </div>

                                <datalist id="values">
                                    <option value="0" />
                                    <option value="10" />
                                </datalist>
                            </div>
                        </div>

                        {/* Education Level Input */}
                        <div className="bg-white/90 rounded-3xl shadow-lg border border-pink-50 px-6 sm:px-8 py-6 sm:py-8 flex flex-col items-start gap-4">
                            <Label htmlFor="education">What is your current level of education?</Label>

                            <div className="flex flex-col gap-2">
                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        value="in-middle-school"
                                        {...register("education", {required: true})}
                                        className="accent-pink-500"
                                    />
                                    Enrolled in middle school (6-8th grade)
                                </label>

                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        value="in-high-school"
                                        {...register("education", {required: true})}
                                        className="accent-pink-500"
                                    />
                                    Enrolled in high school (9th-12th grade)
                                </label>

                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        value="hs-incomplete"
                                        {...register("education", {required: true})}
                                        className="accent-pink-500"
                                    />
                                    Did not complete high school
                                </label>

                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        value="completed-hs"
                                        {...register("education", {required: true})}
                                        className="accent-pink-500"
                                    />
                                    Completed high school
                                </label>

                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        value="higher-education"
                                        {...register("education", {required: true})}
                                        className="accent-pink-500"
                                    />
                                    Enrolled in higher education (university, trade school, etc.)
                                </label>
                            </div>
                        </div>

                        {/* Higher Education Plan Input */}
                        <div className="bg-white/90 rounded-3xl shadow-lg border border-pink-50 px-6 sm:px-8 py-6 sm:py-8 flex flex-col items-start gap-4">
                            <Label htmlFor="ed-plan">Are you planning on pursuing higher education? (university, trade school, etc.)</Label>

                            <div className="flex flex-col gap-2">
                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        value="in-higher-ed"
                                        {...register("ed-plan", {required: true})}
                                        className="accent-pink-500"
                                    />
                                    Yes, I'm already enrolled in higher education
                                </label>

                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        value="planning-for-higher-ed"
                                        {...register("ed-plan", {required: true})}
                                        className="accent-pink-500"
                                    />
                                    Yes, I plan to go to higher education
                                </label>

                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        value="no"
                                        {...register("ed-plan", {required: true})}
                                        className="accent-pink-500"
                                    />
                                    No
                                </label>

                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        value="unsure"
                                        {...register("ed-plan", {required: true})}
                                        className="accent-pink-500"
                                    />
                                    I'm not sure yet
                                </label>
                            </div>
                        </div>

                        {/* Income Input */}
                        <div className="bg-white/90 rounded-3xl shadow-lg border border-pink-50 px-6 sm:px-8 py-6 sm:py-8 flex flex-col items-start gap-4">
                            <Label htmlFor="income">Do you currently have any sources of income?</Label>

                            <div className="flex flex-col gap-2">
                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        value="job"
                                        {...register("income", {required: true})}
                                        className="accent-pink-500"
                                    />
                                    Yes, I have a job
                                </label>

                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        value="allowance"
                                        {...register("income", {required: true})}
                                        className="accent-pink-500"
                                    />
                                    Yes, I have an allowance
                                </label>

                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        value="supports-family"
                                        {...register("income", {required: true})}
                                        className="accent-pink-500"
                                    />
                                    Yes, but most/all of my income supports my family
                                </label>

                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        value="birthday-holiday"
                                        {...register("income", {required: true})}
                                        className="accent-pink-500"
                                    />
                                    No, only birthday/holiday money
                                </label>

                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        value="no"
                                        {...register("income", {required: true})}
                                        className="accent-pink-500"
                                    />
                                    No
                                </label>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center">
                            <Button
                                type="submit"
                                className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 sm:px-6 py-2 rounded-full hover:from-pink-600 hover:to-rose-600 transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base font-semibold"
                            >
                                Submit
                            </Button>
                        </div>
                    </form>
                </div>
            </main>
        </GradientBackground>
    )
}