export interface Owner {
   avatar_url: string;
   events_url: string;
   followers_url: string;
   following_url: string;
   gists_url: string;
   gravatar_id: string;
   html_url: string;
   id: number;
   login: string;
   node_id: string;
   organizations_url: string;
   received_events_url: string;
   repos_url: string;
   site_admin: boolean;
   starred_url: string;
   subscriptions_url: string;
   type: string;
   url: string;
}

export interface Repository {
   allow_forking: boolean;
   archive_url: string;
   archived: boolean;
   assignees_url: string;
   blobs_url: string;
   branches_url: string;
   clone_url: string;
   collaborators_url: string;
   comments_url: string;
   commits_url: string;
   compare_url: string;
   contents_url: string;
   contributors_url: string;
   created_at: string;
   default_branch: string;
   deployments_url: string;
   description: string | null;
   disabled: boolean;
   downloads_url: string;
   events_url: string;
   fork: boolean;
   forks_count: number;
   forks_url: string;
   forks: number;
   full_name: string;
   git_commits_url: string;
   git_refs_url: string;
   git_tags_url: string;
   git_url: string;
   has_discussions: boolean;
   has_downloads: boolean;
   has_issues: boolean;
   has_pages: boolean;
   has_projects: boolean;
   has_wiki: boolean;
   homepage: string | null;
   hooks_url: string;
   html_url: string;
   id: number;
   is_template: boolean;
   issue_comment_url: string;
   issue_events_url: string;
   issues_url: string;
   keys_url: string;
   labels_url: string;
   language: string | null;
   languages_url: string;
   license: string | null;
   merges_url: string;
   milestones_url: string;
   mirror_url: string | null;
   name: string;
   node_id: string;
   notifications_url: string;
   open_issues_count: number;
   open_issues: number;
   owner: Owner;
   private: boolean;
   pulls_url: string;
   pushed_at: string;
   releases_url: string;
   size: number;
   ssh_url: string;
   stargazers_count: number;
   stargazers_url: string;
   statuses_url: string;
   subscribers_url: string;
   subscription_url: string;
   svn_url: string;
   tags_url: string;
   teams_url: string;
   topics: string[];
   trees_url: string;
   updated_at: string;
   url: string;
   visibility: string;
   watchers_count: number;
   watchers: number;
   web_commit_signoff_required: boolean;
}
