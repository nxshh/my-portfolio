import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/Dialog';
import { Shield, Settings, Download } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] glass border-white/10 text-foreground">
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading font-bold">Download Resume</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Select the version of the resume you'd like to download.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Button
            variant="outline"
            className="h-20 glass border-white/5 hover:border-accent/50 group flex items-center justify-start gap-4 px-6 p-0 overflow-hidden"
            render={
              <a 
                href="/CS_Resume_Nisarga.pdf" 
                download="CS_Resume_Nisarga.pdf"
                onClick={() => onClose()}
                className="w-full h-full flex items-center gap-4"
              >
                <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:scale-110 transition-transform ml-6">
                  <Shield className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-lg">Cybersecurity Resume</div>
                  <div className="text-xs text-muted-foreground">Security Analyst & Researcher focus</div>
                </div>
                <Download className="w-4 h-4 ml-auto mr-6 opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>
            }
          />

          <Button
            variant="outline"
            className="h-20 glass border-white/5 hover:border-primary/50 group flex items-center justify-start gap-4 px-6 p-0 overflow-hidden"
            render={
              <a 
                href="/DevOps_Resume_Nisarga.pdf" 
                download="DevOps_Resume_Nisarga.pdf"
                onClick={() => onClose()}
                className="w-full h-full flex items-center gap-4"
              >
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform ml-6">
                  <Shield className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-lg">DevOps Resume</div>
                  <div className="text-xs text-muted-foreground">Automation & Cloud Engineering focus</div>
                </div>
                <Download className="w-4 h-4 ml-auto mr-6 opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>
            }
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
