---
sidebarDepth: 3
---

# TicketForm

The component provides a form to create a ticket. User fills in the information such as title, type, category and priority of the ticket.

## Properties

| Value                     | Description                                                  | Default                                                     | Required |
|---------------------------|--------------------------------------------------------------|-------------------------------------------------------------|----------|
| ticketSuccessMessage      | String to be displayed after ticket is created successfully. | Your ticket has been submitted. We'll get back to you soon. | No       |
| ticketSuccessRedirectPage | Page to redirect after ticket is created successfully.       | support                                                     | No       |

## Sample Page

```ini

title = "ticket-create"
url = "/ticket-create"
layout = "default"
description = "This page provides the form to create a new ticket"
is_hidden = 0

[ticketForm]
ticketSuccessMessage = "Your ticket has been submitted. We'll get back to you soon."
ticketSuccessRedirectPage = "/support"
==
<div class="container m-t-lg">
    {% component 'ticketForm' %}
</div>

```
