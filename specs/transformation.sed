# ensure ASPM name is consistent with other abbreviations e.g. AspmApi not ASPMApi
s/"ASPM"/"aspm"/g
# multiple schemas mistakenly capitalize the resources parameter PLATFORMPG-778983
s/"Resources"/"resources"/g
