# AllergyPal

AllergyPal is an application used to quickly identify the allergens of concern for the user on products. The user can either utilize a device's camera to scan a bar code or directly search via keyword to retrieve the nutrition facts and ingredients of a given product. Users have the ability to customize their allergens of concern.

# Installation
###  1. Install MAMP
Navigate to in your browser:
```bash
https://www.mamp.info/en/downloads/
```
Scroll down to download for your respective `OS` (mac/Windows) and `architecture` (ARM/Intel CPU). The most recent version of MAMP will be on the top.

#### Check your architecture (for `macOS` only)
Open Terminal, then run:
```
uname -m
```
| Output Example | Meaning (CPU)                                           |
| -------------- | -------------------------------------------------- |
| `x86_64`       | **Intel**                       |
| `i386`         | **Intel** |
| `arm64`        | **ARM**          |

### 2. Run Set up Wizard for MAMP and install
### 3. Open File Explorer and locate htdocs folder
Navigate to your MAMP installation directory and open the `htdocs` folder.

Default location (Windows):
`C:\MAMP\htdocs`

Default location (macOS):
`/Applications/MAMP/htdocs` (Need verification)

If you installed MAMP somewhere else, simply open your MAMP installation folder and locate the htdocs directory inside it.
### 4. Delete index file in htdocs
[TODO: Picture here]

### 5. Open htdocs in your IDE and clone the repo
```
git clone https://github.com/nluu05/AllergyPal.git
cd AllergyPal
```
### 6. Open the file `AllergyPal/Data/alldb.sql` and copy its contents to your clipboard

### 7. Run and open MAMP as `administrator`

### 8. Configure Ports under MAMP -> Preferences -> Ports
[TODO: Picture here of MAMP -> Preferences]

[TODO: Picture here of Ports]

### 9. Select `MAMP default` and click `OK`

### 10. Take note of your Apache Port
This will be used later in step 16.

### 11. Click `Start Servers`
Wait for it to finish starting. This will be indicated via the `Apache Server` and `MySQL Server` indicator nodes in the top right.
### 12. `Open WebStart Page`

### 13. Navigate to Tools -> PHPMYADMIN
[TODO: Picture here]

### 14. Navigate to SQL
[TODO: Picture here]

### 15. Paste in contents from step 6 and click `Go`
[TODO: Picture here]

### 16. Navigate to Apache Port localhost in your browser
```
http://localhost:[APACHE_PORT]
```
Refer to step 10 for Apache Port.

[TODO: Picture here]
### 17. Click into `AllergyPal`

### 18. Click into `guestmain.html`




