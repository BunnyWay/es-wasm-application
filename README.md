# Template: es-wasm-application

This templates demonstrates a WASM application built for Bunny using a local `Deno`.

> You do not want to use Deno? Feel free to use something else, [here](https://bunny.net) is a full
> fledged example with `node` instead!

## Setup

To run this example you'll need to have a valid
[Deno](https://docs.deno.com/runtime/manual/getting_started/installation/) installation.

When you have the `deno` binary available, you should be able to run the `check`
task which is the task ensuring everything is compiling fine.

```
# A tiny lint just to be sure!
deno task lint

# We ensure everything is type compliant!
deno task check
```

We also use `pnpm` to use `changeset`.

## Changeset

This template uses [changeset](https://github.com/changesets/changesets) for 
version management. Changeset helps track and document changes in your project, 
making it easier to manage releases and generate changelogs.

When you make changes to the project, you should create a changeset to describe
those changes:

1. Run the following command:
   ```
   pnpm changeset
   ```
2. Follow the prompts to select the type of change (major, minor, or patch) and provide a brief description.
3. Commit the generated changeset file along with your code changes.

This process ensures that all modifications are properly documented and 
versioned, facilitating smoother releases and better communication about 
project updates.

When you merge a pull request that includes a changeset, it will automatically 
create an associated pull request to release your changes. 

This new pull request will trigger the release process of the script to your
PullZone in Bunny.


> This behavior is disabled by default, every pushes on main are now pushed to
> Bunny directly.
> You can enable this pattern again by updating this
> [action](./.github/workflows/on-merge.yml)
