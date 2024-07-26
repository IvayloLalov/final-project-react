export default function AddWorkout() {
  return (
    <div className="add-workout">
      <h1>Add Workout</h1>
      <form method="post">
        <input type="text" name="type" placeholder="Type" required />
        <input type="text" name="level" placeholder="Skill Level" required />
        <input type="number" name="duration" placeholder="Duration" required />

        <textarea
          name="description"
          id="description"
          placeholder="Description"
          cols={30}
          rows={10}
        ></textarea>

        <button type="submit" className="btn btn-primary btn-block btn-large">
          Create
        </button>
      </form>
    </div>
  );
}
