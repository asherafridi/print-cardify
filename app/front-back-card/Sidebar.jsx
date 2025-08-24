"use client";
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Upload, 
  Printer, 
  RefreshCw, 
  FlipVertical, 
  ArrowLeft, 
  Image as ImageIcon,
  Copy,
  Sparkles
} from "lucide-react";
import Image from 'next/image';
import { useRouter } from 'next/navigation';



const ModernSidebar = ({ 
  side, 
  setSide, 
  count, 
  setCount, 
  setFrontImage, 
  setBackImage,
  frontImage,
  backImage
}) => {
    
    const router = useRouter();
  function toggleSide() {
    side === "front" ? setSide('back') : setSide('front');
  }

  function print() {
    window.print();
  }

  function handleCountChange(value) {
    setCount(parseInt(value));
  }

  function handleFrontFileChange(e) {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFrontImage(imageUrl);
    }
  }

  function handleBackFileChange(e) {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setBackImage(imageUrl);
    }
  }

  function reset() {
    setSide("front");
    setFrontImage(null);
    setBackImage(null);
    setCount(1);
  }
  function back(){
    router.back();
  }
  return (
    <div className="fixed w-full md:w-[500px] max-h-screen md:min-h-full print:hidden overflow-y-scroll">
      <div className="h-full bg-grey-300 border-r border-violet-100/50">
        {/* Header */}
        <div className="px-6 pt-4">
          <div className="flex items-center justify-start mb-4">
            
              <Button 
                variant="ghost" 
                size="sm"
                onClick={back}
                className="text-slate-600 cursor-pointer bg-white hover:text-violet-600 hover:bg-violet-50 transition-all duration-300"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            <div className="flex items-center gap-3 ml-4">
              <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center shadow-sm">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div>
                <h1 className="font-bold text-lg bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                  Print Cardify
                </h1>
                <p className="text-xs text-slate-500">CNIC Layout Generator</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-3 ">
          {/* Upload Section */}
          <Card className="border-0 bg-white/60 backdrop-blur-sm shadow-sm">
            <CardHeader className="">
              <CardTitle className="text-lg flex items-center gap-2">
                 <ImageIcon className="w-5 h-5 text-violet-600" />
                Upload Images
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Front Side Upload */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-slate-700">Front Side</Label>
                <div className="relative group">
                  <input
                    type="file"
                    onChange={handleFrontFileChange}
                    accept="image/*"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                  
                  
                  <div className="border-2 flex flex-col items-center border-dashed border-violet-200 rounded-xl p-6 text-center transition-all duration-300 hover:border-violet-300 hover:bg-violet-50/50 group-hover:scale-[1.02]">
                    {frontImage ? <Image src={frontImage} width={100} height={70} alt="front-image-preview" /> :<Upload className="w-8 h-8 text-violet-400 mx-auto mb-2" /> }
                    {frontImage ? <p className="text-sm text-blue-600 font-semibold">Picture Uploaded ✓</p> : <p className="text-sm text-slate-600">Click to upload front image</p>}
                    {frontImage ? <p className="text-xs text-slate-400 mt-1">Click here to change it!</p> : <p className="text-xs text-slate-400 mt-1">PNG, JPG up to 10MB</p>}
                  </div>
                </div>
              </div>

              {/* Back Side Upload */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-slate-700">Back Side</Label>
                <div className="relative group">
                  <input
                    type="file"
                    onChange={handleBackFileChange}
                    accept="image/*"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                  <div className="border-2 flex flex-col items-center border-dashed border-cyan-200 rounded-xl p-6 text-center transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-50/50 group-hover:scale-[1.02]">
                    {backImage ? <Image src={backImage} width={100} height={70} alt="front-image-preview" /> :<Upload className="w-8 h-8 text-violet-400 mx-auto mb-2" /> }
                    {backImage ? <p className="text-sm text-blue-600  font-semibold">Picture Uploaded ✓</p> : <p className="text-sm text-slate-600">Click to upload back image</p>}
                    {backImage ? <p className="text-xs text-slate-400 mt-1">Click here to change it!</p> : <p className="text-xs text-slate-400 mt-1">PNG, JPG up to 10MB</p>}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Settings Section */}
          <Card className="border-0 bg-white/60 backdrop-blur-sm shadow-sm">
            <CardHeader className="">
              <CardTitle className="text-lg flex items-center gap-2">
                <Copy className="w-5 h-5 text-emerald-600" />
                Print Settings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Label className="text-sm font-medium text-slate-700">Number of Copies</Label>
                <Select value={count.toString()} onValueChange={handleCountChange}>
                  <SelectTrigger className="w-full bg-white/80 border-emerald-200 focus:ring-emerald-500 focus:border-emerald-500">
                    <SelectValue  defaultValue={1}/>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Copy</SelectItem>
                    <SelectItem value="2">2 Copies</SelectItem>
                    <SelectItem value="4">4 Copies</SelectItem>
                    <SelectItem value="6">6 Copies</SelectItem>
                    <SelectItem value="8">8 Copies</SelectItem>
                    <SelectItem value="10">10 Copies</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="space-y-3">
            {/* Primary Actions */}
            <div className="grid grid-cols-2 gap-3">
              <Button 
                onClick={print}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300"
              >
                <Printer className="w-4 h-4 mr-2" />
                Print
              </Button>
              
              <Button 
                onClick={toggleSide}
                variant="outline"
                className="border-2 border-violet-200 text-violet-700 hover:bg-violet-50 hover:border-violet-300 transition-all duration-300"
              >
                <FlipVertical className="w-4 h-4 mr-2" />
                Flip
              </Button>
            </div>

            {/* Reset Button */}
            <Button 
              onClick={reset}
              variant="outline"
              className="w-full border-2 border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300 transition-all duration-300"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Reset All
            </Button>
          </div>

          {/* Status Indicator */}
          <Card className="border-0 bg-gradient-to-r from-violet-50 to-purple-50 shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Current Side:</span>
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${side === 'front' ? 'bg-violet-500' : 'bg-cyan-500'} animate-pulse`}></div>
                  <span className="text-sm font-medium capitalize text-slate-700">{side}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ModernSidebar;