import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-6 p-8">
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />

      {/* Small buttons */}
      <div className="flex gap-4">
        <Button title="Small - Rounded Sm" styles="text-sm rounded-sm" />
        <Button title="Small - Rounded Md" styles="text-sm rounded-md" />
        <Button title="Small - Rounded Full" styles="text-sm rounded-full" />
      </div>

      {/* Medium buttons */}
      <div className="flex gap-4">
        <Button title="Medium - Rounded Sm" styles="text-base rounded-sm" />
        <Button title="Medium - Rounded Md" styles="text-base rounded-md" />
        <Button
          title="Medium - Rounded Full"
          styles="text-base rounded-full"
        />
      </div>

      {/* Large buttons */}
      <div className="flex gap-4">
        <Button title="Large - Rounded Sm" styles="text-lg rounded-sm" />
        <Button title="Large - Rounded Md" styles="text-lg rounded-md" />
        <Button title="Large - Rounded Full" styles="text-lg rounded-full" />
        <Button title="Large - Rounded Lg" styles="text-lg rounded-lg" />
      </div>
    </div>
  );
};

export default Landing;