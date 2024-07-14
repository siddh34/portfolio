import axios from "axios";
import { FreshContext } from "$fresh/server.ts";

interface Owner {
	login: string;
	id: number;
	node_id: string;
	avatar_url: string;
	gravatar_id: string;
	url: string;
	html_url: string;
	followers_url: string;
	following_url: string;
	gists_url: string;
	starred_url: string;
	subscriptions_url: string;
	organizations_url: string;
	repos_url: string;
	events_url: string;
	received_events_url: string;
	type: string;
	site_admin: boolean;
}

interface Repository {
	id: number;
	node_id: string;
	name: string;
	full_name: string;
	private: boolean;
	owner: Owner;
	html_url: string;
	description: null | string;
	fork: boolean;
	url: string;
	forks_url: string;
	keys_url: string;
	collaborators_url: string;
	teams_url: string;
	hooks_url: string;
	issue_events_url: string;
	events_url: string;
	assignees_url: string;
	branches_url: string;
	tags_url: string;
	blobs_url: string;
	git_tags_url: string;
	git_refs_url: string;
	trees_url: string;
	statuses_url: string;
	languages_url: string;
	stargazers_url: string;
	contributors_url: string;
	subscribers_url: string;
	subscription_url: string;
	commits_url: string;
	git_commits_url: string;
	comments_url: string;
	issue_comment_url: string;
	contents_url: string;
	compare_url: string;
	merges_url: string;
	archive_url: string;
	downloads_url: string;
	issues_url: string;
	pulls_url: string;
	milestones_url: string;
	notifications_url: string;
	labels_url: string;
	releases_url: string;
	deployments_url: string;
	created_at: string;
	updated_at: string;
	pushed_at: string;
	git_url: string;
	ssh_url: string;
	clone_url: string;
	svn_url: string;
	homepage: null | string;
	size: number;
	stargazers_count: number;
	watchers_count: number;
	language: string;
	has_issues: boolean;
	has_projects: boolean;
	has_downloads: boolean;
	has_wiki: boolean;
	has_pages: boolean;
	has_discussions: boolean;
	forks_count: number;
	mirror_url: null | string;
	archived: boolean;
	disabled: boolean;
	open_issues_count: number;
	license: null | string;
	allow_forking: boolean;
	is_template: boolean;
	web_commit_signoff_required: boolean;
	topics: string[];
	visibility: string;
	forks: number;
	open_issues: number;
	watchers: number;
	default_branch: string;
}

interface PRPlusIssue {
    total_count: number;
}   

export const handler = async (
	_req: Request,
	_ctx: FreshContext
): Promise<Response> => {
	const username = "siddh34";
	try {

		const response_pr: {data: PRPlusIssue} = await axios.get(
			`https://api.github.com/search/issues?q=is:pr+author:${username}&sort=created&order=desc`
		);

        const response_isses: {data:PRPlusIssue} = await axios.get(
			`https://api.github.com/search/issues?q=is:issue+author:${username}&sort=created&order=desc`
		);

		const repos: {data: Repository[]} = await axios.get(
			`https://api.github.com/users/${username}/repos`
		);
		
		const forks = repos.data.filter((repo) => repo.fork === true);

		return new Response(
			JSON.stringify({
				PRs: response_pr.data.total_count,
				Issues: response_isses.data.total_count,
				Forks: forks.length,
			})
		);
	} catch (error) {
		console.error(error);
		return new Response("Error fetching PRs", { status: 500 });
	}
};
