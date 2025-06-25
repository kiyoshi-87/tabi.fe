import { AlertTriangle, X } from 'lucide-react';
import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

interface LogoutModalProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

const LogoutModal: React.FC<LogoutModalProps> = ({ open, onClose, onConfirm }) => {
    if (!open) return null;
    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <Card className="bg-gray-900 border-gray-800 w-full max-w-md">
                <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center">
                                <AlertTriangle className="h-5 w-5 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold text-white">Confirm Logout</h3>
                        </div>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={onClose}
                            className="text-gray-400 hover:text-white hover:bg-gray-800"
                        >
                            <X className="h-4 w-4" />
                        </Button>
                    </div>

                    <div className="mb-6">
                        <p className="text-gray-300 mb-2">Are you sure you want to log out?</p>
                        <p className="text-sm text-gray-400">
                            You will be redirected to the login page. You can login again anytime.
                        </p>
                    </div>

                    <div className="flex space-x-3">
                        <Button variant="outline" onClick={onClose} className="flex-1 border-gray-700 text-white hover:bg-gray-800">
                            Cancel
                        </Button>
                        <Button onClick={onConfirm} className="flex-1 bg-red-600 hover:bg-red-700 text-white">
                            Logout
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default LogoutModal;