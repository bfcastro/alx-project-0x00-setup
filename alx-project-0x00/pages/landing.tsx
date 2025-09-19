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
        <Button title="Small - Rounded Sm" className="text-sm rounded-sm" />
        <Button title="Small - Rounded Md" className="text-sm rounded-md" />
        <Button title="Small - Rounded Full" className="text-sm rounded-full" />
      </div>

      {/* Medium buttons */}
      <div className="flex gap-4">
        <Button title="Medium - Rounded Sm" className="text-base rounded-sm" />
        <Button title="Medium - Rounded Md" className="text-base rounded-md" />
        <Button
          title="Medium - Rounded Full"
          className="text-base rounded-full"
        />
      </div>

      {/* Large buttons */}
      <div className="flex gap-4">
        <Button title="Large - Rounded Sm" className="text-lg rounded-sm" />
        <Button title="Large - Rounded Md" className="text-lg rounded-md" />
        <Button title="Large - Rounded Full" className="text-lg rounded-full" />
      </div>
    </div>
  );
};

export default Landing;