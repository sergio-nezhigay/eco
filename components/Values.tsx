import React from "react";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

function Values() {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-4 gap-6">
          <div className="col-span-4 bg-gray-300 p-4 text-center md:col-span-2">
            <h2 className="">Main values of our company</h2>
          </div>
          <div className="col-span-4 bg-gray-300 p-4 text-center md:col-span-2">
            <p>
              EcoSolution envisions a world where sustainable energy solutions
              power a brighter and cleaner future for all. We aspire to be at
              the forefront of the global shift towards renewable energy,
              leading the way in innovative technologies that harness the power
              of nature to meet the world&apos;s energy needs.
            </p>
          </div>

          <Card className="col-span-2 bg-gray-300 p-4 text-center md:col-span-1">
            <CardTitle>Openness</CardTitle>
            <CardDescription>
              to the world, people, new ideas and projects
            </CardDescription>
          </Card>

          <Card className="col-span-2 bg-gray-300 p-4 text-center md:col-span-1">
            <CardTitle className="text-base">Responsibility</CardTitle>
            <CardDescription>
              we are aware that the results of our work have an impact on our
              lives and the lives of future generations
            </CardDescription>
          </Card>
          <div className="hidden bg-gray-300 p-4 text-center md:col-span-2 md:block">
            pict1
          </div>
          <div className="hidden bg-gray-300 p-4 text-center md:col-span-2 md:block">
            pict2
          </div>
          <div className="col-span-2 bg-gray-300 p-4 text-center md:col-span-1">
            3
          </div>
          <div className="col-span-2 bg-gray-300 p-4 text-center md:col-span-1">
            4
          </div>
        </div>
      </div>
    </section>
  );
}

export default Values;
