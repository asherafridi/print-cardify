"use client";
import React, { useState } from 'react';
import ModernPassportPaper from './Paper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Upload, 
  Printer, 
  RefreshCw, 
  ArrowLeft, 
  Image as ImageIcon,
  Copy,
  Sparkles,
  User,
  Grid3X3
} from 'lucide-react';
import { useRouter } from 'next/navigation';


const ModernPassportGenerator = ({ onBack }) => {
  const router= useRouter();
  const [count, setCount] = useState(4);
  const [image, setImage] = useState(null);

  function handleCountChange(value) {
    setCount(parseInt(value));
  }

  function handleFileChange(e) {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  }

  function print() {
    window.print();
  }

  function reset() {
    setImage(null);
    setCount(4);
  }
  function back(){
    router.back();
  }
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 print:bg-white w-full min-h-screen md:flex box-border">
      {/* Sidebar */}
      <div className="fixed max-h-screen overflow-y-auto w-full bg-gray-200  md:w-[500px] min-h-screen print:hidden">
        <div className="h-full  border-r border-blue-100/50">
          {/* Header */}
          <div className="px-6 pt-4">
            <div className="flex items-center justify-start mb-4">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={back}
                  className="cursor-pointer text-slate-600 bg-white hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              <div className="flex items-center gap-3 ml-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-sm">
                  <User className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h1 className="font-bold text-lg bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Print Cardify
                  </h1>
                  <p className="text-xs text-slate-500">Passport Photo Maker</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-4  ">
            {/* Upload Section */}
            <Card className="border-0 bg-white/60 backdrop-blur-sm shadow-sm">
              <CardHeader className="">
                <CardTitle className="text-lg flex items-center gap-2">
                  <ImageIcon className="w-5 h-5 text-blue-600" />
                  Upload Photo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-slate-700">Your Photo</Label>
                  <div className="relative group">
                    <input
                      type="file"
                      onChange={handleFileChange}
                      accept="image/*"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                    <div className="border-2 border-dashed border-blue-200 rounded-xl p-6 text-center transition-all duration-300 hover:border-blue-300 hover:bg-blue-50/50 group-hover:scale-[1.02]">
                      {image ? (
                        <div className="space-y-3">
                          <div className="w-20 h-24 bg-blue-100 rounded-lg mx-auto flex items-center justify-center overflow-hidden">
                            <img src={image} alt="Uploaded photo" className="w-full h-full object-cover" />
                          </div>
                          <p className="text-sm text-blue-600 font-medium">Photo uploaded ✓</p>
                          <p className="text-xs text-slate-400">Click to change photo</p>
                        </div>
                      ) : (
                        <>
                          <Upload className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                          <p className="text-sm text-slate-600">Click to upload your photo</p>
                          <p className="text-xs text-slate-400 mt-1">PNG, JPG up to 10MB</p>
                          <p className="text-xs text-blue-500 mt-2 font-medium">Perfect for passport photos</p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Settings Section */}
            <Card className="border-0 bg-white/60 backdrop-blur-sm shadow-sm">
              <CardHeader className="">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Grid3X3 className="w-5 h-5 text-indigo-600" />
                  Layout Settings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-slate-700">Number of Photos</Label>
                  <Select value={count.toString()} onValueChange={handleCountChange}>
                    <SelectTrigger className="w-full bg-white/80 border-indigo-200 focus:ring-indigo-500 focus:border-indigo-500">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="4">4 Photos</SelectItem>
                      <SelectItem value="8">8 Photos</SelectItem>
                      <SelectItem value="12">12 Photos</SelectItem>
                      <SelectItem value="16">16 Photos</SelectItem>
                      <SelectItem value="20">20 Photos</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-slate-500 mt-1">
                    Each photo will be 35×45mm (standard passport size)
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3">
              {/* Primary Action */}
              <Button 
                onClick={print}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
              >
                <Printer className="w-4 h-4 mr-2" />
                Print Passport Photos
              </Button>

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


          </div>
        </div>
      </div>

      {/* Paper Preview Area */}
      <div className="print:p-0 hidden print:block md:flex md:pl-[500px] w-full justify-center py-8 px-4">
        <ModernPassportPaper 
          count={count} 
          image={image} 
        />
      </div>
    </div>
  );
};

export default ModernPassportGenerator;