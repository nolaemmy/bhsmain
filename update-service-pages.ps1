# PowerShell script to update service pages with enhanced RCM cards

$servicePages = @(
    @{
        path = "app\services\patient-demographics\page.tsx"
        service = "/services/patient-demographics"
    },
    @{
        path = "app\services\eligibility\page.tsx"
        service = "/services/eligibility"
    },
    @{
        path = "app\services\charge-capture\page.tsx"
        service = "/services/charge-capture"
    },
    @{
        path = "app\services\payment-posting\page.tsx"
        service = "/services/payment-posting"
    },
    @{
        path = "app\services\accounts-receivable\page.tsx"
        service = "/services/accounts-receivable"
    },
    @{
        path = "app\services\revenue-cycle-management\page.tsx"
        service = "/services/revenue-cycle-management"
    }
)

foreach ($page in $servicePages) {
    $filePath = $page.path
    $serviceName = $page.service
    
    Write-Host "Updating $filePath..."
    
    # Read the file content
    $content = Get-Content $filePath -Raw
    
    # Add import if not present
    if ($content -notmatch "import EnhancedRCMSolutions") {
        $content = $content -replace 'import Image from "next/image"', 'import Image from "next/image"
import EnhancedRCMSolutions from "@/components/sections/enhanced-rcm-solutions"'
    }
    
    # Replace RCM Solutions section
    $pattern = '(?s)(\s*{/\* RCM Solutions Section.*?</section>)'
    $replacement = "`n`n      {/* Enhanced RCM Solutions Section */}`n      <EnhancedRCMSolutions currentService=`"$serviceName`" />"
    
    $content = $content -replace $pattern, $replacement
    
    # Write back to file
    Set-Content -Path $filePath -Value $content -Encoding UTF8
    
    Write-Host "Updated $filePath successfully"
}

Write-Host "All service pages updated!"