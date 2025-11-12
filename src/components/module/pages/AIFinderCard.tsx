"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


import { Sparkles } from "lucide-react";
import { useState } from "react";

interface AIFinderCardProps {
  onSubmit?: (symptoms: string, specialty: string) => void;
}

const AIFinderCard = ({ onSubmit }: AIFinderCardProps) => {
  const [symptoms, setSymptoms] = useState("");
  const [specialty, setSpecialty] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(symptoms, specialty);
    }
  };

  return (
    <div className="bg-card rounded-2xl shadow-soft p-6 sm:p-8 border border-border">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-foreground">AI Doctor Finder</h3>
        <Sparkles className="text-primary" size={24} />
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="symptoms" className="text-sm text-muted-foreground">
            What are your symptoms?
          </Label>
          <Input
            id="symptoms"
            placeholder="e.g., headache, fever, cough"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            className="h-12"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="specialty" className="text-sm text-muted-foreground">
            Preferred specialty
          </Label>
          <Select value={specialty} onValueChange={setSpecialty}>
            <SelectTrigger id="specialty" className="h-12">
              <SelectValue placeholder="General Physician" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="general">General Physician</SelectItem>
              <SelectItem value="cardiology">Cardiology</SelectItem>
              <SelectItem value="dermatology">Dermatology</SelectItem>
              <SelectItem value="pediatrics">Pediatrics</SelectItem>
              <SelectItem value="orthopedics">Orthopedics</SelectItem>
              <SelectItem value="neurology">Neurology</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button type="submit" className="w-full h-12 text-base" size="lg">
          Get AI Recommendations
        </Button>

        <p className="text-xs text-center text-muted-foreground">
          Powered by advanced AI technology
        </p>
      </form>
    </div>
  );
};

export default AIFinderCard;
