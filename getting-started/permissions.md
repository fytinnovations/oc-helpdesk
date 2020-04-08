---
sidebarDepth: 3
---

# Roles And Permissions

## Roles

Helpdesk has 3 primary Roles namely **Supervisor**, **Support Agent**, **End User**

## Permissions

Helpdesk has a very simple set of permissions namely **Manage HelpDesk**, **Assign Tickets**, **Self Assign Ticket**, **Create Tickets**.

1. **Manage Helpdesk**

    user can manage the helpdesk's settings page and will also be able to delete records from the system.

2. **Assign Tickets**

    user can assign tickets to other users.

3. **Self Assign Ticket**

    user can assign tickets to himself.

4. **Manage Assigned Ticket**

    user can manage his ticket (change status, change priority, write a private comment). user cannot delete the ticket though.

## Recommended Roles and Permissions Mapping

| Permissions/Roles     | Supervisor       | Support Agent    | End User         |
| ----------------------|:----------------:|:----------------:|:----------------:|
| Manage Helpdesk       |:heavy_check_mark:|                  |                  |
| Assign Ticket         |:heavy_check_mark:|                  |                  |
| Self Assign Ticket    |:heavy_check_mark:|:heavy_check_mark:|                  |
| Manage Assigned Ticket|:heavy_check_mark:|:heavy_check_mark:|                  |
