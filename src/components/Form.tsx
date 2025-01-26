import { Button, FormControl, TextField } from "@mui/material";

function Form() {
  return (
    <form className="container mx-auto max-w-3xl min-w-[420px] dark:bg-slate-600 p-4 bg-green-400">
      <FormControl className="p-4 w-full">
        <TextField
          sx={{ width: "100%" }}
          variant="standard"
          required
          label="First Name"
        />
        <TextField
          sx={{ width: "100%" }}
          variant="standard"
          required
          label="Last Name"
        />
        <TextField
          sx={{ width: "100%" }}
          variant="standard"
          label="Email Address"
        />
        <TextField sx={{ width: "100%" }} variant="standard" label="Password" />
        <TextField
          sx={{ width: "100%" }}
          variant="standard"
          label="Confirm Password"
        />
        <Button>Submit</Button>
      </FormControl>
    </form>
  );
}

export default Form;
