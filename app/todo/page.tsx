import MainLayout from "../components/MainLayout";
import ToDoPost from "../components/ToDoPost";
import TaskList from "../components/TaskList";
export default function Todo() {
	return (
		<MainLayout>
			<div className="flex justify-center">
				<div className="flex-col gap-4 w-full max-w-4xl bg-transparent rounded-xl py-24 px-24 shadow-sm">
					<div className="flex flex-col gap-6 max-w-2xl">
						<h1 className="text-4xl font-bold">Things to do</h1>
						<ToDoPost />
						<TaskList />
					</div>
				</div>
			</div>
		</MainLayout>
	);
}
