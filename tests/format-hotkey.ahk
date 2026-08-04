#Requires AutoHotkey v2.0
#Include ..\BorderlessToggle.ahk

AssertEqual(expected, actual) {
  if expected != actual
    throw Error("Expected '" expected "', got '" actual "'")
}

AssertEqual("Ctrl + Shift + F11", FormatHotkey("+^F11"))
AssertEqual("Alt + Win + A", FormatHotkey("#!a"))
AssertEqual("F12", FormatHotkey("F12"))
ExitApp()
