---
sidebarDepth: 3
---

# Configuration

The plugin contains some configuration settings which you may find useful. If you wish to request some additional settings you can put a [feature request](https://github.com/fytinnovations/oc-helpdesk/issues).

## Notifications

The default mode for notifications is email. Please ensure that you have a working SMTP Server configured before enabling the below notifications.

### Notify all the assignee when a ticket is assigned

Support agents will be notified when a ticket is assigned to them by the supervisor

### Notify all the assignee when there is a private comment on the ticket

This plugin provides a feature for posting private comments so that different agents can talk to each other without the knowledge of the end user. Enabling this feature will notify the agents for those private comments.

### Notify supervisors when new a ticket is created

Supervisors will be notified whenever a new ticket is submitted by the end user.

### Notify users and all the assignee when there is a comment on the ticket

All the assignee and the end user be notified for every public comment on the ticket

### Notify users, supervisor and all the assignee when there is a change in the status of the ticket

When the status of the ticket changes the end user, supervisor and all the assignee will be notified

## Status Mapping

Map default status of the ticket based on different events.

### New Ticket Status

Choose the status of the ticket when a new ticket is created. Default: Open

### Closed Ticket Staus

Choose the status of the ticket when a ticket is closed. Default: Closed

### Reopened Ticket Status

Choose the status of the ticket when a ticket is reopened.Default: Open
