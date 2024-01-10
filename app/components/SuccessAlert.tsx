import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { useState, useEffect } from "react";

export default function SuccessAlert({
	initialOpen,
}: {
	initialOpen: boolean;
}) {
	const [open, setOpen] = useState(initialOpen);
	useEffect(() => {
		setOpen(initialOpen);
	}, [initialOpen]);
	if (open)
		return (
			<div className="rounded-md bg-green-50 p-4">
				<div className="flex">
					<div className="flex-shrink-0">
						<CheckCircleIcon
							className="h-5 w-5 text-green-400"
							aria-hidden="true"
						/>
					</div>
					<div className="ml-3">
						<p className="text-sm font-medium text-green-800">
							Thanks for reaching out! I&apos;ll get back to you as soon as I
							can!
						</p>
					</div>
					<div className="ml-auto pl-3">
						<div className="-mx-1.5 -my-1.5">
							<button
								type="button"
								className="inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
								onClick={(e) => {
									e.preventDefault();
									setOpen(false);
								}}>
								<span className="sr-only">Dismiss</span>
								<XMarkIcon className="h-5 w-5" aria-hidden="true" />
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	else return null;
}
