import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

function App() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>cc-mobile-test</CardTitle>
          <CardDescription>Getting started</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <p className="text-sm text-muted-foreground">
            Your app is ready. Start building here.
          </p>
          <Button>Get started</Button>
        </CardContent>
      </Card>
    </main>
  )
}

export default App
