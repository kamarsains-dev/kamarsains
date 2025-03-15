import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const ModalPage = () => {
    return (
        <div>
        <Dialog>
            <DialogTrigger>Open</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{`We're Almost Ready!`}</DialogTitle>
                        <DialogDescription className="text-gray-600">
                            This feature is still in the works and will launch soon. Stay tuned!
                        </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>

        </div>
    );  
};

export default ModalPage; 